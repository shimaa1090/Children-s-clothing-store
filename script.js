function showCategory(category) {
  // إخفاء الكل أولاً
  document.getElementById("girls").style.display = "none";
  document.getElementById("boys").style.display = "none";

  // إظهار القسم المطلوب
  document.getElementById(category).style.display = "block";
}
