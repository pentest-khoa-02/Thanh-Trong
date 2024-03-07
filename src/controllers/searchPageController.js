let searchPage = async (req, res) => {
    return res.render("search.ejs")
};

module.exports = {
    searchPage: searchPage,
};
