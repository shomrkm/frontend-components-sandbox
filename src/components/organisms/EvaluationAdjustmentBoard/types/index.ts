export type Base = {
  crew: {
    id: string;
    empCode: string;
    firstName: string;
    lastName: string;
    profile: string;
    departments?: string[];
    bizEstablishmentName?: string | null;
    jobTitleName?: string | null;
    employmentTypeName?: string | null;
    enteredAt?: string;
    emp_status?: 'employed' | 'absent';
  };
  data: Record<string, unknown>;
};

export type Evaluation = {
  crew: Base['crew'];
  data: {
    rank: string;
  };
};
