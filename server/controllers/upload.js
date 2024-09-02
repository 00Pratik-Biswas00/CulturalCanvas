import cloudinary from "cloudinary";

export const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeImage = async (req, res) => {
  const { image } = req.body;
  const deletePhoto = (publicId) => {
    return new Promise((resolve) => {
      cloudinary.uploader.destroy(publicId, (result) => {
        resolve(result);
      });
    });
  };
  const photoPublicId = image.public_id;
  try {
    await deletePhoto(photoPublicId);
    res.status(200).json({ status: true });
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).json({ error: "Error deleting photo" });
  }
};
