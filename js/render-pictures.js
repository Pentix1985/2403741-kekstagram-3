function renderPictures(pictureContainer, data, config) {
  const picturesList = document.querySelector(pictureContainer);
  const picturesFragment = document.createDocumentFragment();

  const createPricture = (
    {
      url,
      description,
      likes: likesCount,
      comments: {
        length: commentsCount
      }
    },
    {
      TEMPLATE_NAME,
      TEMPLATE_ROOT,
      TEMPLATE_LIKES,
      TEMPLATE_COMMENTS
    }) => {
    const pictureTemlate = document.querySelector(TEMPLATE_NAME)
      .content
      .querySelector(TEMPLATE_ROOT)
      .cloneNode(true);

    const img = pictureTemlate.querySelector('img');
    img.src = url;
    img.alt = description;

    const likes = pictureTemlate.querySelector(TEMPLATE_LIKES);
    likes.textContent = likesCount;

    const comments = pictureTemlate.querySelector(TEMPLATE_COMMENTS);
    comments.textContent = commentsCount;

    return pictureTemlate;
  };

  data.forEach((pictureData) => {
    picturesFragment.append(createPricture(pictureData, config));
  });

  picturesList.append(picturesFragment);
}

export { renderPictures };
