const microverseApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Um2BR5oCOcLYd21wIEWu/';

export const postComment = async (itemId, username, comment) => {
  try {
    const data = {
      item_id: itemId,
      username,
      comment,
    };

    const response = await fetch(`${microverseApi}comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      return; // Return or perform any desired action upon successful creation
    }

    const responseData = await response.json();
    throw new Error('Failed to create comment');
  } catch (error) {
    throw error;
  }
};

export const postLike = async (itemId) => {
  try {
    const data = {
      item_id: itemId,
    };

    const response = await fetch(`${microverseApi}likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      return; // Return or perform any desired action upon successful creation
    }

    const responseData = await response.json();
    throw new Error('Failed to create like');
  } catch (error) {
    throw error;
  }
};

export const getLikes = async (itemId) => {
  try {
    const response = await fetch(`${microverseApi}likes`);
    const data = await response.json();
    const likesData = data.find((item) => item.item_id === itemId);
    return likesData;
  } catch (error) {
    throw error;
  }
};

export const getComments = async (itemId) => {
  try {
    const response = await fetch(`${microverseApi}comments?item_id=${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const displayComments = async (commentsData, p, commentList) => {
  p.textContent = `Comments (${commentsData.length})`;
  commentsData.forEach((comment) => {
    const comm = document.createElement('li');
    comm.textContent = `${comment.creation_date} - ${comment.username} : ${comment.comment}`;

    commentList.appendChild(comm);
  });
};