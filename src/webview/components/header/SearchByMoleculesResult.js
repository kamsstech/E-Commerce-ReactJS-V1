import * as React from "react";
import { Link } from "react-router-dom";
import delete_icon from "../../../assets/images/icons/delete.svg";
import { convertToSlug } from '../../../util/Helper';


const SearchByMoleculesResult = (props) => {
  const { searchKey, searchByMoleculeResult, click, deleteSearch,setSearchList } = props;
  console.log(searchByMoleculeResult,"<<<<<<<<< searchByMoleculeResult")

  const localStoreFunction = (itemname) => {
		// console.log(itemname,"^^^^^^^^^^^^^^^^^^^^^^^^^ itemname")
		if(itemname){
			return (
				// setSearchKey("")
				setSearchList(false)
			)
		}
		// setSearchKey("")
		// localStorage.setItem('prd', itemname);
		// localStorage.setItem('prd', itemname);
		// sessionStorage.setItem('prd', itemname);
		// localStorage['prd'] = itemname;

	};
  return (
    <>
      {/* {click && searchKey === "" &&
        <>
          <div className="recent-search-div">
            <p className="recent-search-title">RECENT SEARCHES</p>
            <p className="recent-search-title">Clear all
              <span className="span-delete" onClick={deleteSearch}><img src={delete_icon} alt="delete icon" /></span>
            </p>
          </div>
          {searchByMoleculeResult !== undefined && searchByMoleculeResult.map((item, index) => (
            <div className="web-search-result-list" key={index}>
              <Link to="/home">
                <div>
                  <div className="web-search-sec mb-7">
                  <h4 className="web-search-proname"><span style={{fontWeight:"900"}}>{searchKey}</span>{item.c_item_name.slice(searchKey.length).toLowerCase()}</h4>
                    <h4 className="web-search-proname">{item.c_item_name}</h4>

                  </div>
                  <div className="web-search-sec">
                    <h5 className="web-search-pack">
                      Pack Size: {item.c_pack_name}
                    </h5>
                  </div>
                  <div className="web-search-sec">
                    <h5 className="web-search-pack">{item.c_item_mfg_name}</h5>
                    <h4 className="web-search-price">₹ {item.n_max_mrp}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </>


      } */}


      {
        searchKey.length >= 2 &&
        <>

          {searchByMoleculeResult.payload.length >0 ? searchByMoleculeResult.payload !== undefined && searchByMoleculeResult.payload.map((item, index) => (
            <div className="web-search-result-list" key={index}>
              <Link to={`/plp/mol?index=0&q=${item.c_molecule_code}&n=${item.c_molecule_name}`} >
                <div>
                  <div className="web-search-sec mb-7">
                   
                    <h4 className="web-search-proname" onClick={() => localStoreFunction(item.c_molecule_code)}>
                      {/* <span style={{fontWeight:"900"}}>{searchKey}</span> */}
                      {item.c_molecule_name}</h4>
                    
                    {/* <h5 className="web-search-pack">
                      Pack Size: {item.c_item_pack_size}
                    </h5> */}
                  </div>
                  <div className="web-search-sec">
                    {/* <h5 className="web-search-pack">{item.c_item_mfac_name}</h5> */}
                    {/* <h4 className="web-search-price">₹ {item.n_max_mrp}</h4> */}
                  </div>
                </div>
              </Link>
            </div>
          ))
        
        
        :
        searchByMoleculeResult.error && <h4 className="text-center">{searchByMoleculeResult.error !=="" && searchByMoleculeResult.error}</h4>
        
        }
        </>

      }

    </>
  );
};

export default SearchByMoleculesResult;
