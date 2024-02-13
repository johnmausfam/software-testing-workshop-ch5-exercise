function union_set(a, b) {
    let result = new Set(a || []);
    b?.forEach(function (bItem) {
        result.add(bItem);
    });
    return result;
}

module.exports = { union_set };
