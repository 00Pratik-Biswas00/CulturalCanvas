import React from "react";
import SingleStateCulture from ".";
import { useTranslation } from "react-i18next";

const AndhraPradeshState = () => {
  const { t } = useTranslation();
  const stateData = t("AndhraPradeshData", { returnObjects: true });

  // Extracting Andhra Pradesh data from `singleStateData`

  return (
    <div>
      <SingleStateCulture
        stateName={stateData.stateName}
        greetingImg={stateData.greetingImg}
        greetingName={stateData.greetingName}
        stateImg={stateData.stateImg}
        stateHistory={stateData.stateHistory}
        stateHistoryVideo={stateData.stateHistoryVideo}
        cuisineDetails={stateData.cuisineDetails}
        cuisineCourse={stateData.cuisineCourse}
        clothingImg={stateData.clothingImg}
        clothingDetails={stateData.clothingDetails}
        languageImg={stateData.languageImg}
        languageDetails={stateData.languageDetails}
        languageCourse={stateData.languageCourse}
        artsDetails={stateData.artsDetails}
        artsCourse={stateData.artsCourse}
      />
    </div>
  );
};

export default AndhraPradeshState;
