import { CSSProperties, FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import { useTransitionState } from './useTransitionState';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  container: HTMLElement | null;
  isModal?: boolean;
  style?: CSSProperties;
};

/**
 * フォーカス・タブ操作まわりのa11y対応は独自componentとしてはやらない
 */
export const Drawer: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  isModal = false,
  container,
  style,
  children,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawerTop, setDrawerTop] = useState(0);
  const [drawerHeight, setDrawerHeight] = useState(0);

  // スライドするtransitionの分だけDOM操作を遅らせる
  const isTransitioning = useTransitionState(isOpen, 100);
  // transitionを考慮したDrawerの開閉フラグ
  const isTransitioningDrawerOpen = isOpen && isTransitioning;

  useEffect(() => {
    if (!isOpen || !container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const topPoint = containerRect.top < 0 ? 0 : containerRect.top;
      setDrawerTop(topPoint);
      setDrawerHeight(window.innerHeight - topPoint);
    };

    const handleResize = () => {
      const containerRect = container.getBoundingClientRect();
      const topPoint = containerRect.top < 0 ? 0 : containerRect.top;
      setDrawerTop(topPoint);
      setDrawerHeight(window.innerHeight - topPoint);
    };
    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    resizeObserver.observe(document.body);

    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    window.addEventListener('resize', handleResize, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [isOpen, container]);

  if (!isOpen && !isTransitioning) {
    return null;
  }

  return createPortal(
    <div
      ref={drawerRef}
      role="dialog"
      aria-modal="true"
      aria-hidden={isTransitioningDrawerOpen ? 'false' : 'true'}
    >
      {isModal && (
        <Background isOpen={isTransitioningDrawerOpen} onClick={onClose} role="presentation" />
      )}
      <ChildrenWrapper
        isOpen={isTransitioningDrawerOpen}
        top={drawerTop}
        height={drawerHeight}
        style={style}
      >
        {children}
      </ChildrenWrapper>
    </div>,
    document.body
  );
};

const ChildrenWrapper = styled.div<{ isOpen: boolean; height?: number; top?: number }>(
  ({ isOpen, height, top }) => css`
    position: fixed;
    top: ${top ? `${top}px` : 0};
    right: 0;
    width: auto;
    height: ${height ? `${height}px` : '100%'};
    transform: translateX(${isOpen ? 0 : '100%'});
    transition: transform 100;
    z-index: 99;
  `
);

const Background = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #030302;
    opacity: ${isOpen ? 0.5 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: opacity '100ms ease-in-out', visibility 100ms ease-in-out;
    z-index: 99;
  `
);
