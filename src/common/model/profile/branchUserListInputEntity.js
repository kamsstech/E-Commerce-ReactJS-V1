export interface BranchUserListInputEntity {
    n_user_id: number,
    n_branch_id?: number,
    c_name?: string,
    j_role: {
        is_assigned?: string;
        n_view_transaction: string;
        n_place_order: string;
        n_min_value: number;
        n_max_value: number;
        n_granted_per: string;
    }
}