const transform = (number) => {
    let transform = require('romanize');
    return transform(number);
}

export {
    transform
};