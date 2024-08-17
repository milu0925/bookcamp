import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={`${styles.footer} d-flex flex-wrap`}>
      <div className="col-12 d-flex justify-content-center">
        <div className={`${styles.footerTop} col-11 col-md-10`}>
          <div className={`${styles.contactUs} col-12 col-md-5`}>
            <img src="/img/test/書營標準字.png" />
            <div className={`${styles.footerSearch} search-frame mt-4`}>
              <input placeholder="聯絡我們" type="text" />
              <button type="submit">搜尋</button>
            </div>
          </div>
          <div className="col-12 col-md-7">
            {/* 網頁版footer */}
            <div className={`${styles.footerList} d-none d-md-flex`}>
              <ul>
                <span>關於我們</span>
                <li>
                  <Link href="#/">關於我們</Link>
                </li>
                <li>
                  <Link href="#/">企業歷史</Link>
                </li>
                <li>
                  <Link href="#/">價值觀</Link>
                </li>
                <li>
                  <Link href="#/">合作夥伴</Link>
                </li>
              </ul>
              <ul>
                <span>客服幫助</span>
                <li>
                  <Link href="#/">消費問題</Link>
                </li>
                <li>
                  <Link href="#/">會員等級</Link>
                </li>
                <li>
                  <Link href="#/">消費權益</Link>
                </li>
                <li>
                  <Link href="#/">常見Q&A</Link>
                </li>
              </ul>
              <ul>
                <span>購物資訊</span>
                <li>
                  <Link href="#/">優惠券取得</Link>
                </li>
                <li>
                  <Link href="#/">關於上架</Link>
                </li>
                <li>
                  <Link href="#/">購物流程</Link>
                </li>
              </ul>
              <ul>
                <span>服務條款</span>
                <li>
                  <Link href="#/">使用者條款</Link>
                </li>
                <li>
                  <Link href="#/">交易紀錄</Link>
                </li>
                <li>
                  <Link href="#/">版權聲明</Link>
                </li>
              </ul>
            </div>
            {/* 手機板footer */}
            <div
              className={`${styles.phoneFooterList} accordion accordion-flush d-block d-md-none`}
              id="accordionFooter"
              data-bs-theme="dark"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse1"
                    aria-expanded="false"
                    aria-controls="flush-collapse1"
                  >
                    關於我們
                  </button>
                </h2>
                <div
                  id="flush-collapse1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFooter"
                >
                  <div className="accordion-body pt-0 pb-4">
                    <ul>
                      <li>
                        <Link href="#/">關於...</Link>
                      </li>
                      <li>
                        <Link href="#/">關於...</Link>
                      </li>
                      <li>
                        <Link href="#/">關於...</Link>
                      </li>
                      <li>
                        <Link href="#/">關於...</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse2"
                    aria-expanded="false"
                    aria-controls="flush-collapse2"
                  >
                    客服幫助
                  </button>
                </h2>
                <div
                  id="flush-collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFooter"
                >
                  <div className="accordion-body pt-0 pb-4">
                    <ul>
                      <li>
                        <Link href="#/">幫助...</Link>
                      </li>
                      <li>
                        <Link href="#/">幫助...</Link>
                      </li>
                      <li>
                        <Link href="#/">幫助...</Link>
                      </li>
                      <li>
                        <Link href="#/">幫助...</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse3"
                    aria-expanded="false"
                    aria-controls="flush-collapse3"
                  >
                    購物資訊
                  </button>
                </h2>
                <div
                  id="flush-collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFooter"
                >
                  <div className="accordion-body pt-0 pb-4">
                    <ul>
                      <li>
                        <Link href="#/">購物...</Link>
                      </li>
                      <li>
                        <Link href="#/">購物...</Link>
                      </li>
                      <li>
                        <Link href="#/">購物...</Link>
                      </li>
                      <li>
                        <Link href="#/">購物...</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    服務條款
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFooter"
                >
                  <div className="accordion-body pt-0 pb-4">
                    <ul>
                      <li>
                        <Link href="#/">條款...</Link>
                      </li>
                      <li>
                        <Link href="#/">條款...</Link>
                      </li>
                      <li>
                        <Link href="#/">條款...</Link>
                      </li>
                      <li>
                        <Link href="#/">條款...</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 免責聲明 */}
      <div className="col-11 col-md-10 d-flex justify-content-center">
        <ul className={styles.statement}>
          <span className="fw-bold me-3">
            <i className="fa-solid fa-circle-exclamation me-2"></i>免責聲明
          </span>
          <li>歡迎使用本網站。請在使用本網站之前閱讀本免責聲明。</li>
          <li>
            1.
            本網站僅用於練習和教育目的。網站內容可能包含不準確、過時或不完整的資訊，並且可能不應被視為正式的參考來源。我們不對網站內容的準確性、完整性、實用性或可靠性提供任何保證。
          </li>
          <li>
            2.
            本網站的內容僅代表作者的觀點和意見，並不代表任何組織、公司或個人的立場。
          </li>
          <li>
            3.
            使用本網站內容所引起的任何決策或行動均由使用者自行承擔，我們不對使用者根據網站內容做出的任何決定承擔責任。
          </li>
          <li>
            4.
            本網站可能包含指向其他外部網站或資源的連結，我們不對這些外部連結的內容負責，並且不對由於使用或依賴這些連結而導致的任何損失或損害負責。
          </li>
          <li>
            5. 我們保留隨時更改本網站內容、終止網站運營或更改免責聲明的權利。
          </li>
          <li>
            6.本免責聲明受到所在地區法律的約束。如有疑問，請諮詢專業的法律顧問。
          </li>
          <li>
            如果您繼續使用本網站，即表示您接受並同意本免責聲明的條款和條件。如果您不同意這些條款，請立即停止使用本網站。
            如有任何疑問或疑慮，請通過 該電話:09******** 與我們聯繫。
          </li>
        </ul>
      </div>
      {/* 版權 */}
      <div className="col-12 position-relative">
        <div className={styles.footerDonate}>
          <div>
            <i className="fa-brands fa-cc-apple-pay"></i>
          </div>
          <div>
            <i className="fa-brands fa-google"></i>
          </div>
          <div>
            <i className="fa-brands fa-line"></i>
          </div>
          <div>
            <i className="fa-brands fa-cc-visa"></i>
          </div>
        </div>
        <hr />
        <div className={styles.trademarkBlock}>
          <i className="fa-regular fa-copyright me-2"></i>2023書營購物網
          版權沒有 翻印必究
        </div>
      </div>
    </div>
  );
}
