import React from "react";

const OtherApp = () => {
  return (
    <div
      className="d-flex container mt-5 flex-column justify-content-center"
      style={{ direction: "rtl" }}
    >
      <div className="d-flex col-12  justify-content-between flex-row ">
        <div className="span" style={{ fontWeight: "bold" }}>
          سفارش
        </div>
        <a className="nav-link active" style={{ fontSize: "14px" }} href="#">
          بازگشت
        </a>
      </div>
      <div className="d-flex flex-lg-row align-items-start col-12 flex-column justify-content-between mt-2">
        <div className="card d-flex col-md-12 col-lg-8 py-3 px-5  flex-column border ">
          <span className="fs-6 text-secondary">آزمون</span>
          <div className=" d-flex flex-row justify-content-between p-3  mt-2 card border  ">
            <span>کنکور سراسری سال 1400 / ریاضی / دوازدهم</span>

            <a href="#" style={{ color: "#6e00aa", fontSize: "13px" }}>
              تغییر
            </a>
          </div>
          {/* dpfjspdofj */}
          <div className="d-flex  flex-column mt-4">
            <span className="fs-6 text-secondary">مشاور شما</span>
            <div className=" d-flex flex-row justify-content-between p-4  mt-2 card border  ">
              <div className="d-flex flex-row align-items-center">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "lightgrey",
                    border: "2px",
                    borderColor: "#6e00aa",
                  }}
                />
                <div className="me-2 d-flex flex-column">
                  <span
                    className=" fs-6 font-weight-bold align-items-center justify-conter-between"
                    style={{ fontWeight: "bold", color: "#757575" }}
                  >
                    سید یاسین ضیایی زاده
                  </span>
                  <span style={{ fontSize: "13px", color: "#757575" }}>
                    رتبه 13 دکتری و رتبه 35 ارشد، فارغ التحصیل دانشگاه علم و
                    صنعت ایران
                  </span>
                </div>
              </div>
              <span href="#" style={{ color: "#757575", fontSize: "13px" }}>
                بیش از 60 جلسه مشاوره
              </span>
            </div>
          </div>
          {/* fsdfjjsldfi */}
          <div className="d-flex flex-column  mt-4">
            <span className="fs-6 text-secondary">تعداد مشاوره تلفنی</span>
            <div className=" d-flex flex-row justify-content-between p-3  mt-2 card border  ">
              <span>ماهانه دو جلسه</span>

              <a href="#" style={{ color: "#6e00aa", fontSize: "13px" }}>
                تغییر
              </a>
            </div>
          </div>
          {/* afjdfjsdfkj */}
          <div className="d-flex  flex-column mt-4">
            <span className="fs-6 text-secondary">مشاور شما</span>
            <div className=" d-flex flex-row justify-content-between p-4  mt-2 card border  ">
              <div className="d-flex flex-row align-items-center">
                <div className="me-2 d-flex flex-column ">
                  <span
                    className=" fs-6 font-weight-bold  "
                    style={{ fontWeight: "bold" }}
                  >
                    در 26 شهریور بازه ظهر 12 الی 14
                  </span>
                  <span style={{ fontSize: "13px", color: "#757575" }}>
                    امکان برگزاری جلسه به صورت تلفنی
                  </span>
                </div>
              </div>
              <a href="#" style={{ color: "#6e00aa", fontSize: "13px" }}>
                تغییر
              </a>
            </div>
          </div>
          {/* adokdoj */}
          <div className="d-flex  flex-column mt-4">
            <span className="fs-6 text-secondary">مشاور شما</span>
            <div className=" d-flex flex-row justify-content-between p-4  mt-2 card border  ">
              <div className="d-flex flex-row align-items-center">
                <div className="me-2 d-flex flex-column ">
                  <span
                    className=" fs-6 font-weight-bold  "
                    style={{ fontWeight: "bold" }}
                  >
                    12 ماه
                  </span>
                  <span style={{ fontSize: "13px", color: "#757575" }}>
                    ماهیانه 275,328 تومان
                  </span>
                </div>
              </div>
              <a href="#" style={{ color: "#6e00aa", fontSize: "13px" }}>
                تغییر
              </a>
            </div>
          </div>
        </div>

        <div className="card col-lg-3 col-12 mt-2 mt-lg-0 d-flex ">
          <div className="d-flex flex-column  py-4">
            <h4 className="fs-6  text-secondary  pe-3">خلاصه سفارش</h4>
            <div className="d-flex justify-content-between flex-row px-3 mt-2  c">
              <span style={{ fontSize: "14px" }}>برنامه‌ریزی توسط مشاور</span>
              <span style={{ fontSize: "12px" }}>12 ماه</span>
            </div>
            <div className="d-flex  justify-content-between flex-row px-3  mt-2">
              <span style={{ fontSize: "14px" }}>مشاوره تلفنی</span>
              <span style={{ fontSize: "12px" }}>24 جلسه</span>
            </div>
            <div
              style={{ backgroundColor: "#e1f3f1" }}
              className="d-flex align-item-center justify-content-center mx-2 py-2 rounded mt-2  "
            >
              <span style={{ fontSize: "13px" }}>
                7 روز برنامه ريزي بيشتر هديه اولين خريد
              </span>
            </div>
            <div className="border-top mt-3 ">
              <div className="d-flex flex-row justify-content-between align-items-center mt-3  px-3">
                <span style={{ fontSize: "13px" }}>قیمت</span>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  5,436,000تومان
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center mt-3 px-3">
                <span style={{ fontSize: "13px", color: " #ff3e6c" }}>
                  تخفیف
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: " #ff3e6c",
                    fontWeight: "bold",
                  }}
                >
                  (39% تخفیف) 2,132,064تومان
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center mt-3 px-3">
                <span style={{ fontSize: "13px" }}>قیمت نهایی</span>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  3,303,936تومان
                </span>
              </div>
            </div>
            <button
              className="mt-4 w-75 py-3 d-flex justify-content-center align-self-center rounded"
              style={{
                color: "white ",
                backgroundColor: "#550084",
              }}
            >
              مرحله بعد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherApp;
