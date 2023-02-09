export interface System {
    SystemId?: number;
    OrgID?: string;
    OrgName?: string;
    SystemName?: string;
    SystemShortName?: string;
    SystemIdentifier?: string;
    CreatedBy?: string;
    CreatedByID?: number;
    CreatedDate?: string;
    ModifiedBy?: number;
    ModifiedDate?: string;
    SystemTypeID?: number;
    isActive?: 1 | 0;
    Status?: 1 | 0;
}
