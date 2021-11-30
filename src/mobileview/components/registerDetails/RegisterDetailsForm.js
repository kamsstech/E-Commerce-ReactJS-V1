import * as React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import SwipeableViews from "react-swipeable-views";

import LegalIdentities from "./LegalIdentities";
import ContactInformation from "./ContactInfo";
import { CircularProgress } from "@material-ui/core";

const RegisterDetailsForm = (props) => {
  const {
    type,
    inputs,
    errors,
    errMsg,
    handleInputs,
    handleBlur,
    handleSubmit,
    loading,
    drugExpiryDate,
    handleDrugExpiryDate,
    stateList,
    cityList,
    areaList,
    handleUpload,
    handleStepChange,
    handleNext,
    value,
    gstListResult,
    handleSearchChange,
    handleSearchOnChange,
    handleChanges,
    activeStep,
    state,
    city,
    area,
    gstType,
  } = props;

  // const [openImgViewD1, setOpenImgViewD1] = React.useState(false);
  // const [openImgViewD2, setOpenImgViewD2] = React.useState(false);
  // const [openImgViewNN, setOpenImgViewNN] = React.useState(false);
  const theme = useTheme();
  return (
    <>
      {type === "buyer" ? (
        <ContactInformation
          type={type}
          inputs={inputs}
          errors={errors}
          errMsg={errMsg}
          handleInputs={handleInputs}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
          loading={loading}
          drugExpiryDate={drugExpiryDate}
          handleDrugExpiryDate={handleDrugExpiryDate}
          stateList={stateList}
          cityList={cityList}
          areaList={areaList}
          handleUpload={handleUpload}
          value={value}
          handleNext={handleNext}
          gstListResult={gstListResult}
          handleSearchChange={handleSearchChange}
          handleSearchOnChange={handleSearchOnChange}
          handleChanges={handleChanges}
          state={state}
          city={city}
          area={area}
          gstType={gstType}
        ></ContactInformation>
      ) : (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          <ContactInformation
            type={type}
            inputs={inputs}
            errors={errors}
            errMsg={errMsg}
            handleInputs={handleInputs}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            loading={loading}
            drugExpiryDate={drugExpiryDate}
            handleDrugExpiryDate={handleDrugExpiryDate}
            stateList={stateList}
            cityList={cityList}
            areaList={areaList}
            handleUpload={handleUpload}
            value={value}
            handleNext={handleNext}
            gstListResult={gstListResult}
            handleSearchChange={handleSearchChange}
            handleSearchOnChange={handleSearchOnChange}
          ></ContactInformation>
          <LegalIdentities
            inputs={inputs}
            errors={errors}
            errMsg={errMsg}
            handleInputs={handleInputs}
            handleBlur={handleBlur}
            drugExpiryDate={drugExpiryDate}
            handleDrugExpiryDate={handleDrugExpiryDate}
            handleUpload={handleUpload}
            gstListResult={gstListResult}
          ></LegalIdentities>
        </SwipeableViews>
      )}
      <div className="registration-bothgt"></div>
      <AppBar
        position="fixed"
        color="primary"
        className="registration-bottombar"
      >
        {type === "seller" ? 

        <MobileStepper
          variant="dots"
          steps={2}
          position="static"
          activeStep={activeStep}
          className="registrationSteps"
          nextButton={
            <Fab color="default" size="small" className="active-indi">
              {activeStep + 1}
            </Fab>
          }
          backButton={
            <Button size="small" onClick={activeStep < 1 ? handleNext:handleSubmit}>
              {loading ? <CircularProgress className="spining-icon" /> : null}{" "}
              {activeStep < 1 ? <>next</> : <>finish</>}
            </Button>
          }
        />
        :
        <Button
              variant="contained"
              color="primary"
              className="registrationStepsBtn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <CircularProgress className="spining-icon" /> : null}{" "}
              Done
            </Button> 
        
      }
      </AppBar>
    </>
  );
};

export default RegisterDetailsForm;
