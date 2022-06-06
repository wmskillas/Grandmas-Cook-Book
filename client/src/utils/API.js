export const getBreakfasts = (breakfastData) => {
  return fetch("/api/breakfast", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(breakfastData),
  });
};

export const getSingleBreakfast = (breakfastId) => {
  return fetch(`/api/breakfast/${breakfastId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(breakfastId),
  });
};

export const createBreakfast = (breakfastData) => {
  return fetch("http://localhost:5000/api/breakfast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(breakfastData),
  });
};

export const updateBreakfast = (breakfastId, breakfastData, token) => {
  return fetch(`/api/breakfast/${breakfastId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(breakfastData),
  });
};

export const deleteBreakfast = (breakfastId, token) => {
  return fetch(`/api/breakfast/${breakfastId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const addBreakfastReaction = (
  breakfastId,
  reactionId,
  breakfastData,
  reactionData,
  token
) => {
  return fetch(`/api/breakfast/${breakfastId}/reactions/${reactionId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(breakfastData, reactionData),
  });
};

export const removeBreakfastReaction = (breakfastId, reactionId, token) => {
  return fetch(`/api/breakfast/${breakfastId}/reactions/${reactionId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

//////////////////////////////////////////////////////////////////////////////

export const getLunches = (lunchData) => {
  return fetch("/api/lunch", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lunchData),
  });
};

export const getSingleLunch = (lunchId) => {
  return fetch(`/api/lunch/${lunchId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lunchId),
  });
};

export const createLunch = (lunchData) => {
  return fetch("/api/lunch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lunchData),
  });
};

export const updateLunch = (lunchId, token) => {
  return fetch(`/api/lunch/${lunchId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lunchId),
  });
};

export const deleteLunch = (lunchId, token) => {
  return fetch(`/api/lunch/${lunchId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const addLunchReaction = (
  lunchId,
  reactionId,
  lunchData,
  reactionData,
  token
) => {
  return fetch(`/api/lunch/${lunchId}/reactions/${reactionId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lunchData, reactionData),
  });
};

export const removeLunchReaction = (lunchId, reactionId, token) => {
  return fetch(`/api/lunch/${lunchId}/reactions/${reactionId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

///////////////////////////////////////////////////////////

export const getDinners = (dinnerData) => {
  return fetch("/api/dinner", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dinnerData),
  });
};

export const getSingleDinner = (dinnerId) => {
  return fetch(`/api/dinner/${dinnerId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dinnerId),
  });
};

export const createDinner = (dinnerData) => {
  return fetch("/api/dinner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dinnerData),
  });
};

export const updateDinner = (dinnerId, token) => {
  return fetch(`/api/dinner/${dinnerId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dinnerId),
  });
};

export const deleteDinner = (dinnerId, token) => {
  return fetch(`/api/dinner/${dinnerId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const addDinnerReaction = (
  dinnerId,
  reactionId,
  dinnerData,
  reactionData,
  token
) => {
  return fetch(`/api/dinner/${dinnerId}/reactions/${reactionId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dinnerData, reactionData),
  });
};

export const removeDinnerReaction = (dinnerId, reactionId, token) => {
  return fetch(`/api/dinner/${dinnerId}/reactions/${reactionId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const api = {
  createBreakfast,
};

export default api;
////////////////////////////////////////////////////////////////////////////

//Need to add User routes
