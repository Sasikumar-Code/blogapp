/** @format */

export const addFovor = (data) => {
  return {
    type: 'FAVOR_ADD',
    payload: {
      data,
    },
  };
};
