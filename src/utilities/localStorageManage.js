// use local storage to manage cart data

export const addToDB = (id) => {
    let qunatity = Number(localStorage.getItem(id));
    if (localStorage.getItem(id)) {
        qunatity++;
        localStorage.setItem(id, qunatity);
    } else {
        localStorage.setItem(id, 1);
    }
};
