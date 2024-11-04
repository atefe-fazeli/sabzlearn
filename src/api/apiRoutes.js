const VERSION = "http://localhost:4000/v1/"

export const RegisterURL = VERSION +"auth/register";
export const GetUserURL = VERSION +"auth/me";
export const LoginURL = VERSION +"auth/login";
export const TopbarLinks = VERSION +"menus/topbar";
export const AllMenus = VERSION +"menus";
export const CreateNewCommentURL = VERSION +"comments";
export const LastCoursesURL = VERSION +"courses";
export const AllCategoryURL = VERSION +"category";
export const CategoryURL =(categoryName)=> VERSION +`courses/category/${categoryName}`;
export const AllcoursesURL = VERSION +"courses";
export const CourseInfoURL =(courseName)=> VERSION +`courses/${courseName}`;
export const AllArticlesURL = VERSION +"articles";
export const ArticleInfoURL =(articleName)=> VERSION +`articles/${articleName}`;
export const PresellCoursesURL = VERSION +"courses/presell";
export const PopularCoursesURL = VERSION +"courses/popular";
export const ContactURL = VERSION +"contact";
export const NewsletterURL = VERSION +"newsletters";
export const SearchURL =(value)=> VERSION +`search/${value}`;
export const SeeNotificationURL = (notifID)=>VERSION +`notifications/see/${notifID}`;
export const UsersURL = VERSION +"users";









