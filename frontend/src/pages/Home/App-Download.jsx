import React from "react";
import "./App-Download.css"; 

const AppDownload = () => {
  return (
    <div className="app-download">
      <div className="app-banner">
        <h2>
          <span className="highlight">Bluestock App 2.0</span> is Live Now!
        </h2>
        <p className="download-text">Download Our App</p>
        <div className="store-buttons">
          <img className="app-store"
           src="https://s3-alpha-sig.figma.com/img/0768/782c/0fb8a05c6af23786b96fcf9d417be83c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fh6Yb1NPHo4hC9wk-4nRaFXP6pMn6JDmxdKon11SjI1-S1s2vXDpbYOQM5aVpsre3VyZIFGTmygK6MVoSzBK1Mhmgbx~aZDTTFwdCy5e1crfrYVtBnBcnnu7Z1resTle-YxSEnlO2Uknz-1XHEzEUyU3l58fw0ntfjwr2GeGe0Rc6JUdep3FHDttnRMP0V2S1YrX4jFy7v2-foAjrhukEyXmjWnH2N7qndKbreAS1WJBwPre9G5MeziVPItARFQTEEl38L3kjMxwCv0jHjc2cLx4y3hAU5-XLBNHlrfHaY5JJVQctBhwvH-cp2mDYRzbDxs3akj~f7E5sMZN0nnWFA__" alt="Google Play" className="store-icon" />
          <img className="app-store"
           src="https://s3-alpha-sig.figma.com/img/1297/31c9/08028945765c6c2b8711fdfa973584ee?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UIm-gZF-gj82hj-Jyb9Qtc7SZSClWcCbEO9x5S04MbBE5wUAjKjdSjh6oXhYiNpujf8ANGpA3R8YHva8089P2cebqtQwlBmhbiMMhb3XWCRiL3GzjAMEUc86TOyOOZ2Ug3wulwEVXJqT1FM2e15FsmmHaHElqEjMz28WHS9HlS88YNrcS5-e3EgEehuK6XdgLiKNF3Nyvxyrnn7Q2xlw-bXSaZoXaOxSfCC8ENRpVYqnYVXJXeZR72TTHBR~JX3w63de3~jLpw-GBmKV-nLLTXTR6DewjPNiH47zyg8bnl5NjaGg9Nr6CDrYudip3ZkRfF~WxLMcxlDEqyOwKoK28A__" alt="App Store" className="store-icon" />
        </div>
      </div>

      <div className="user-reviews">
        <div className="user-images">
          <img src="https://s3-alpha-sig.figma.com/img/46db/a90c/9e079416f760c0281d83276faaabe0c3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM5HLFcqPjj6rCRE3bwheCbKAnrxShfNiLACHGM~ESK0vfXfxBJqMURtoLxHyOQb2HcClCpMT8nwViyKaImNrVr3UPHYVGNdXnrOVn3yUh1S41rcNVeps5o4Y7SOpHMydq55mbAPArWIQg22slU2v1d1vj-G0Kh9DUbupFl3e0E-3GGi-wI5LG6LoIXPrMcnWQ0a2RsALw09aJPcGxno9lm1c8v9BLGRKs9M~JacAp9b1Iy9I114-L16APO8-kFT7r4Tzr1j~uRqVqGczqvxNdaKhCIiDlpRWX2aNIDSrTMEbSstLebTcafbsAS51uZCDsBI1WNfa-zlQvoUMZu2yQ__" alt="User 1" className="user-avatar" />
          <img src="https://s3-alpha-sig.figma.com/img/46db/a90c/9e079416f760c0281d83276faaabe0c3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM5HLFcqPjj6rCRE3bwheCbKAnrxShfNiLACHGM~ESK0vfXfxBJqMURtoLxHyOQb2HcClCpMT8nwViyKaImNrVr3UPHYVGNdXnrOVn3yUh1S41rcNVeps5o4Y7SOpHMydq55mbAPArWIQg22slU2v1d1vj-G0Kh9DUbupFl3e0E-3GGi-wI5LG6LoIXPrMcnWQ0a2RsALw09aJPcGxno9lm1c8v9BLGRKs9M~JacAp9b1Iy9I114-L16APO8-kFT7r4Tzr1j~uRqVqGczqvxNdaKhCIiDlpRWX2aNIDSrTMEbSstLebTcafbsAS51uZCDsBI1WNfa-zlQvoUMZu2yQ__" alt="User 2" className="user-avatar" />
          <img src="https://s3-alpha-sig.figma.com/img/46db/a90c/9e079416f760c0281d83276faaabe0c3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mM5HLFcqPjj6rCRE3bwheCbKAnrxShfNiLACHGM~ESK0vfXfxBJqMURtoLxHyOQb2HcClCpMT8nwViyKaImNrVr3UPHYVGNdXnrOVn3yUh1S41rcNVeps5o4Y7SOpHMydq55mbAPArWIQg22slU2v1d1vj-G0Kh9DUbupFl3e0E-3GGi-wI5LG6LoIXPrMcnWQ0a2RsALw09aJPcGxno9lm1c8v9BLGRKs9M~JacAp9b1Iy9I114-L16APO8-kFT7r4Tzr1j~uRqVqGczqvxNdaKhCIiDlpRWX2aNIDSrTMEbSstLebTcafbsAS51uZCDsBI1WNfa-zlQvoUMZu2yQ__" alt="User 3" className="user-avatar" />
        </div>
        <div className="rating">
          ⭐⭐⭐⭐⭐ <span className="rating-text">(5/5 by 100+ users)</span>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
