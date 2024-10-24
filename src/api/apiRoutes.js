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




// export const LogoutURL = VERSION +"Account/logout";
// export const GetClientURL =(pageNumber)=> VERSION +`client/6/${pageNumber}`;
// export const GetClientDetailURL =(id)=> VERSION +`client/${id}`;
// export const PostClientURL =VERSION +`client`;

// export const GetCoveredURL =(pageNumber)=> VERSION +`client/covered/${pageNumber}/6`;
// export const GetScreeningURL =(pageNumber)=> VERSION +`client/screening/${pageNumber}/6`;


// export const PostErotcURL = (id)=> VERSION +`Research/erotc/${id}`
// export const PostScreeningURL = (id)=> VERSION +`Research/screening/${id}`
// export const GetScreeningClientTestsURL =(id , pageNumber)=> VERSION +`Research/tests/${id}/${pageNumber}/6`;


// export const GetCoveredClientTestsURL =(id , pageNumber)=> VERSION +`Helper/tests/${id}/${pageNumber}/6`;
// export const PostVisitHomeTestURL =(id )=> VERSION +`Helper/visitHome/${id}`;
// export const GetCoveredPatientDetailURL = (id)=> VERSION +`Helper/covered/${id}`;
// export const PostCoveredPatientDetailURL = (id)=> VERSION +`Helper/covered/${id}`;
