import React, { useState } from "react";
import LayoutContests from "../../admin-components/LayoutContests/LayoutContests";
import AddContests from "../../admin-components/AdminModals/AddContests/AddContests";
import AddWinners from "../../admin-components/AdminModals/AddContests/AddWinners";

const ManageDifferentContests = () => {
  const [blogContestModal, setBlogContestModal] = useState(false);
  const [blogWinnerModal, setBlogWinnerModal] = useState(false);

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <h1 className="text-4xl font-semibold tracking-tighter font-playfair">
          Manage Your Contests
        </h1>

        {/* Blog Contest */}
        <LayoutContests
          setModalOpen={setBlogContestModal}
          setWinnersModal={setBlogWinnerModal}
        />

        {blogContestModal && <AddContests setModal={setBlogContestModal} />}
        {blogWinnerModal && <AddWinners setModal={setBlogWinnerModal} />}
      </div>
    </section>
  );
};

export default ManageDifferentContests;
