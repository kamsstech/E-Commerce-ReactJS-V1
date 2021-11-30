import * as React from "react";
import { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";

import { PdpPageItemsEntity } from "../../../common/model";
interface Props {
  GetPdpPageItems(itemCode: string): void;
  pdpPageItemsResult: PdpPageItemsEntity;
  match: any;
}

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)

const About = (props: Props) => {
  const { GetPdpPageItems, pdpPageItemsResult, match } = props;
  useEffect(() => {
    GetPdpPageItems(match.params.productCode);
  }, [])
  
  const generalInfo = pdpPageItemsResult.payload;
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef);
  const myRefSideEffect = useRef(null)
  const executeScrollSideEffect = () => scrollToRef(myRefSideEffect);
  const myRefUsage = useRef(null)
  const executeScrollUsage = () => scrollToRef(myRefUsage);

  return (
    <div>
      { generalInfo && 
      <div>
      <h2 className="product-about-title mt-0">ABOUT DRUG</h2>
      <h5 className="product-adout-desc">Description:</h5>

      <ul className="product-desc-list">
      {generalInfo.j_general_info.a_description.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
      
      </ul>
      <h5 className="product-adout-desc quick-link-space" onClick={executeScrollUsage}>Quick Links:</h5>
      <Button variant="contained" className="quick-links">
        Usage
      </Button>
      <Button variant="contained" className="quick-links" onClick={executeScrollSideEffect}>
        Side Effect
      </Button>
      <Button variant="contained" className="quick-links"  onClick={executeScroll}>
        Contra-indications
      </Button>
      <div className="solid-line"></div>
      <div className="about-subsec">
        <h4 className="subsec-title" ref={myRefUsage}>Usage:</h4>

        {generalInfo.j_general_info.a_usage.map((item, index) => (
                <p className="subsec-desc" key={index} > {item}</p>

              ))}

              
        <p className="subsec-desc">
          <span>Note :</span> The product contains alcohol. In the case of
          children, pregnant and lactating ladies and in certain serious liver
          and alcohol problems, consult a specialist.
        </p>
      </div>
      <div className="about-subsec">
        <h4 className="subsec-title" ref={myRefSideEffect}>Side Effect:</h4>
        {generalInfo.j_general_info.a_side_effect.map((item, index) => (
                <p className="subsec-desc" key={index}>{item}</p>

              ))}
      </div>
      <div className="about-subsec">
        <h4 className="subsec-title" ref={myRef}>Contra-indications:</h4>

          {generalInfo.j_general_info.a_contra_indications.map((item, index) => (
                <p className="subsec-desc" key={index}>
                  {item}
                </p>

              ))}
      </div>
      </div>
}
    </div>
  );
};

export default About;

