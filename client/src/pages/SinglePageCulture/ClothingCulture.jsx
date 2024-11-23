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

        {/* salwar kameez */}

        <LayoutClothingCulture
          heading={clothingNames.salwarHeading}
          description={clothingNames.salwarDescription}
          arrayName={clothingNames.DiffSalwars}
        />

        {/* kurta pajama */}

        <LayoutClothingCulture
          heading={clothingNames.kurtaHeading}
          description={clothingNames.kurtaDescription}
          arrayName={clothingNames.DiffKurtas}
        />

        {/* lehenga */}

        <LayoutClothingCulture
          heading={clothingNames.lehengaHeading}
          description={clothingNames.lehengaDescription}
          arrayName={clothingNames.DiffLehengas}
        />

        {/* sherwani */}

        <LayoutClothingCulture
          heading={clothingNames.sherwaniHeading}
          description={clothingNames.sherwaniDescription}
          arrayName={clothingNames.DiffSherwanis}
        />

        {/* mekhla */}

        <LayoutClothingCulture
          heading={clothingNames.meklaChadorHeading}
          description={clothingNames.meklaChadorDescription}
          arrayName={clothingNames.DiffMeklaChadors}
        />

        {/* mundu */}

        <LayoutClothingCulture
          heading={clothingNames.munduHeading}
          description={clothingNames.munduDescription}
          arrayName={clothingNames.DiffMundus}
        />

        {/* phiran */}

        <LayoutClothingCulture
          heading={clothingNames.phiranHeading}
          description={clothingNames.phiranDescription}
          arrayName={clothingNames.DiffPhirans}
        />

        {/*bandhgala */}

        <LayoutClothingCulture
          heading={clothingNames.bandhgalaHeading}
          description={clothingNames.bandhgalaDescription}
          arrayName={clothingNames.DiffBandgalas}
        />
      </div>
    </section>
  );
};

export default ClothingCulture;
