const articles = [
  {
    id: 1,
    title: " Artificial Intelligence Technology ",
    content:" Artificial intelligence is transforming the world profoundly, being used to enhance efficiency in fields like medicine and education. It aids in data analysis and faster decision-making.",
    image: "assets/img/Article/article1.jpg",
  },
  {
    id: 2,
    title:"Tourism in Japan" ,
    content:"Japan stands out for its cultural diversity and natural beauty, making it a favorite destination for tourists seeking cultural adventures and unique experiences.",
    image: "assets/img/Article/article2.jpg",
  },
  {
    id: 3,
    title: "The Benefits of Healthy Eating",
    content:"Proper nutrition boosts overall health and reduces disease risks. Eating natural foods helps enhance immunity and increase energy levels.",
    image: "assets/img/Article/article3.jpg",
  },
  {
    id: 4,
    title: "Learning Programming",
    content:"Learning programming offers career opportunities and helps develop apps and websites, facilitating access to digital markets.",
    image: "assets/img/Article/article4.jpg",
  },
  {
    id:5,
    title: "Boxing Practice",
    content:"Practicing Boxing improves mental and physical health through deep breathing and mindful movements.",
    image: "assets/img/Article/article5.jpg",
  },
  {
    id: 6,
    title: "Photography",
    content:"Photography is an art of capturing beautiful moments and emotions, allowing us to revisit memories in an instant.",
    image: "assets/img/Article/article6.jpg",
  },
  {
    id: 7,
    title: "Digital Marketing Strategies",
    content:" Digital marketing helps businesses reach a wide audience using strategies such as social media platforms.",
    image: "assets/img/Article/article7.png",
  },
  {
    id: 8,
    title: "Travel Around the World",
    content:"Traveling offers unique experiences, enhances cultural understanding, and creates lifelong memories.",
    image: "assets/img/Article/article8.jpg",
  },
  {
    id: 9,
    title: "The Importance of Daily Exercise",
    content:" Exercising regularly is essential for a healthy lifestyle. Physical activities enhance fitness, reduce stress, and improve well-being.",
    image: "assets/img/Article/article9.jpg",
  },
  {
    id: 10,
    title: "Healthy Nutrition and Its Impact on Health",
    content:" Healthy nutrition plays a crucial role in maintaining well-being. Consuming balanced and nutritious food boosts immunity and improves heart health.",
    image: "assets/img/Article/article10.jpg",
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
