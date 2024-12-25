module.exports.marketget= (req, res) => res.render("market-yard");
module.exports.marketpost= async (req, res) => {
    let test = req.body.test;
    const url = `https://agmarknet.gov.in/SearchCmmMkt.aspx?Tx_Commodity=${test.commodity}&Tx_State=${test.state}&Tx_District=${test.district}&Tx_Market=${test.market}&DateFrom=${test.dateFrom}&DateTo=${test.dateTo}&Fr_Date=${test.dateFrom}&To_Date=${test.dateTo}&Tx_Trend=0&Tx_CommodityHead=onion&Tx_StateHead=Gujarat&Tx_DistrictHead=Ahmedabad&Tx_MarketHead=Ahmedabad(Chimanbhai+Patal+Market+Vasana)`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const table = $("table").first().html();
    res.send(`<table>${table || "No table found"}</table>`);
  };
