
import DataLoader from 'dataloader';
import User from "./../models/user.js"

const authorLoader = new DataLoader(async (authorIds) => {
  
  const authors = await User.find({ _id: { $in: authorIds } });

  
  const authorMap = new Map(authors.map((author) => [author._id.toString(), author]));
  
  
  return authorIds.map((id) => authorMap.get(id.toString()));
});

export default authorLoader;
