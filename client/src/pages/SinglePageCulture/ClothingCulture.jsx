import React from "react";
import img1 from "../../assets/culture/c1.png";

import { useTranslation } from "react-i18next";
import LayoutClothingCulture from "./LayoutClothingCulture";

const ClothingCulture = () => {
  const { t } = useTranslation();
  const clothingNames = t("ClothingCultureData", { returnObjects: true });
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text   ">
      <div className="relative flex items-center justify-center">
        <img src={img1} alt="culture-bg" />
        <div className=" absolute pb-20 font-montserrat font-extrabold text-7xl">
          {clothingNames.traditionalClothsHeading}
        </div>
        <div className="h-20 w-[93%] bg-background1 dark:bg-dark_background1 rounded-t-[3rem] absolute bottom-0 "></div>
      </div>
      <div className="px-16 pb-5 gap-16 flex flex-col items-center justify-center">
        {/* saree */}

        <LayoutClothingCulture
          heading={clothingNames.sareeHeading}
          description={clothingNames.sareeDescription}
          arrayName={clothingNames.DiffSarees}
        />

        {/* dhoti */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* Kurta Pajama */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* salwar kameez */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* lehenga choli */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* sherwani */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* mekhela chador */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* mundu */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/* phiran */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />

        {/*bandhgala */}

        <LayoutClothingCulture
          heading={clothingNames.dhotiHeading}
          description={clothingNames.dhotiDescription}
          arrayName={clothingNames.DiffDhotis}
        />
      </div>
    </section>
  );
};

export default ClothingCulture;
