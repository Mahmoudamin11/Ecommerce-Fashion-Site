export const BASE_URL = `https://ecommerce-dot-code.vercel.app/api`;

export const API = {
  /* ======= Authentication ======= */
  register: `${BASE_URL}/auth/register`,
  login: `${BASE_URL}/auth/login`,
  forgotPassword: `${BASE_URL}/auth/forgotPassword`,
  verifyResetCode: `${BASE_URL}/auth/verifyResetCode`,
  resetPassword: `${BASE_URL}/auth/resetPassword`,

  /* ======= Contact Us ======= */
  contactUs: `${BASE_URL}/contact`,
  /* ======= User ======= */
  getUser: `${BASE_URL}/user/showbyid`,

  /* ======= Category ======= */
  getAllCategories: `${BASE_URL}/category/`,
  /* ======= Product ======= */
  getProductData : (id) => `${BASE_URL}/product/${id}`,
  /* ======= subcategory ======= */
  getAllSubcategories: `${BASE_URL}/subcategory/`,
  getSpecificSubcategory: (subcategoryId) => `${BASE_URL}/subcategory/${subcategoryId}`,
  getAllSubcategoriesForSpecificCategory: (categoryId) =>  `${BASE_URL}/category/${categoryId}/subcategories/`,
};
