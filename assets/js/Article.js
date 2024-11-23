const articles = [
  {
    id: 1,
    title: "تكنولوجيا الذكاء الاصطناعي",
    content:
      "  الذكاء الاصطناعي يغير العالم بشكل جذري، حيث يُستخدم لتحسين الكفاءة في مجالات مثل الطب والتعليم. يساعد في تحليل البيانات واتخاذ قرارات أسرع.",
    image: "assets/img/Article/article1.jpg",
  },
  {
    id: 2,
    title: "السياحة في اليابان",
    content:
      "                  اليابان تمتاز بتنوعها الثقافي وجمال طبيعتها، مما يجعلها وجهة مفضلة للسياح الباحثين عن مغامرات ثقافية وتجارب فريدة.",
    image: "assets/img/Article/article2.jpg",
  },
  {
    id: 3,
    title: "فوائد الأكل الصحي",
    content:
      "                    التغذية السليمة تعزز الصحة العامة وتقلل من مخاطر الأمراض. تناول الأطعمة الطبيعية يساعد على تحسين جهاز المناعة وزيادة النشاط.",
    image: "assets/img/Article/article3.jpg",
  },
  {
    id: 4,
    title: "تعلم البرمجة",
    content:
      "                  اليابان تمتاز بتنوعها الثقافي وجمال طبيعتها، مما يجعلها وجهة مفضلة للسياح الباحثين عن مغامرات ثقافية وتجارب فريدة.",
    image: "assets/img/Article/article4.jpg",
  },
];

function getArticleIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function displayArticleDetails() {
  const articleId = getArticleIdFromUrl();
  if (!articleId) {
    document.getElementById("article-content").innerHTML =
      "<p>Article not found.</p>";
    return;
  }

  const article = articles.find((a) => a.id == articleId);
  if (!article) {
    document.getElementById("article-content").innerHTML =
      "<p>Article not found.</p>";
    return;
  }

  document.getElementById("article-content").innerHTML = `
    <h2>${article.title}</h2>
    <img src="${article.image}" alt="${article.title}" />
    <p>${article.content}</p>
  `;
  document.getElementById("article-details").style.display = "block";
}

document.addEventListener("DOMContentLoaded", displayArticleDetails);
