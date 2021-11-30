import React from "react";
import Branch from "./Branch";
import { BranchListEntity, RegisterEntity, SavePassEntity } from "../../../common/model";

// interface Props {
//   getBranchListAction(): void;
//   branchListResult: BranchListEntity;
//   deleteBranchAction(branchId:number): void;
//   deleteBranchResult: RegisterEntity;
//   setDefaultBranch(firmId: string): void;
//   defaultBranchResult: SavePassEntity;
//   searchBranchListAction(searchKey: string): void;
//   clearGetBranch(): void;
//   clearDeleteBranch(): void;
// }

const BranchPage = (props) => {
  const { getBranchListAction, branchListResult, deleteBranchAction, deleteBranchResult, 
    setDefaultBranch, defaultBranchResult, searchBranchListAction, clearGetBranch, clearDeleteBranch } = props
    
  return(
    <div>
      <Branch 
        getBranchListAction={getBranchListAction}
        branchListResult={branchListResult}
        deleteBranchAction={deleteBranchAction}
        deleteBranchResult={deleteBranchResult}
        setDefaultBranch={setDefaultBranch}
        defaultBranchResult={defaultBranchResult}
        searchBranchListAction={searchBranchListAction}
        clearGetBranch={clearGetBranch}
        clearDeleteBranch={clearDeleteBranch}
      />
    </div>
  )
}

export default BranchPage
