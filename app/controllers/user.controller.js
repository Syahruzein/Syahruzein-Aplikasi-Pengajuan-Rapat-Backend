exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.kaprodiBoard = (req, res) => {
    res.status(200).send("Kaprodi Content.");
  };
  exports.kadepBoard = (req, res) => {
    res.status(200).send("Kadep Content.");
  };
  exports.wadirBoard = (req, res) => {
    res.status(200).send("Wadir Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.directorBoard = (req, res) => {
    res.status(200).send("Director Content.");
  };
  exports.staffBoard = (req, res) => {
    res.status(200).send("Staff Content.");
  };