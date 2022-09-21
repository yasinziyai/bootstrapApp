import React, { useState } from "react";
import PenIcon from "../images/PenIcon";
import GiftIcon from "../images/giftIcon";
import { Rating } from "react-simple-star-rating";
const OtherApp = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
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
        <div className=" d-flex col-md-12 col-lg-8 flex-column ">
          <div className="card  py-3 px-5  ">
            <span className="fs-6 text-secondary">آزمون</span>
            <div className=" d-flex flex-row justify-content-between p-3  mt-2 card border  ">
              <span>کنکور سراسری سال 1400 / ریاضی / دوازدهم</span>
              <a
                className="d-flex flex-row align-items-center justify-content-between"
                href="#"
                style={{
                  color: "#6e00aa",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                <div className="ms-1">
                  <PenIcon width={20} />
                </div>
                تغییر
              </a>
            </div>
            {/* dpfjspdofj */}
            <div className="d-flex  flex-column mt-4">
              <span className="fs-6 text-secondary">مشاور شما</span>
              <div className=" d-flex flex-row justify-content-between align-items-center p-4  mt-2 card border  ">
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
                  <div className="me-2 d-flex flex-column flex-shrink-sm-0">
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
                <div className="d-flex flex-column">
                  <span href="#" style={{ color: "#757575", fontSize: "13px" }}>
                    بیش از 60 جلسه مشاوره
                  </span>

                  <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    size={17}
                  />
                </div>
              </div>
            </div>
            {/* fsdfjjsldfi */}
            <div className="d-flex flex-column  mt-4">
              <span className="fs-6 text-secondary">تعداد مشاوره تلفنی</span>
              <div className=" d-flex flex-row justify-content-between p-3 mt-2 card border  ">
                <span>ماهانه دو جلسه</span>

                <div className="d-flex flex-row align-items-center justify-content-between ">
                  <span
                    className="ms-5 p-1"
                    style={{
                      fontSize: "13px",
                      color: "white",
                      borderRadius: "12px",
                      backgroundColor: "#ff3e6c",
                    }}
                  >
                    ٪10تخفیف
                  </span>
                  <a
                    type="button"
                    data-bs-target="#staticBackdrop"
                    data-bs-toggle="modal"
                    className="d-flex flex-row align-items-center justify-content-between"
                    href="#"
                    style={{
                      color: "#6e00aa",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    <div className="ms-1">
                      <PenIcon width={20} />
                    </div>
                    تغییر
                  </a>
                  {/* modal */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="py-4 px-3 px-lg-4 pos-rel modal-body">
                          <div className="flex-row d-flex justify-content-between">
                            <div className="flex-column justify-content-between">
                              <h3 style={{ fontSize: "18px" }}>مشاوره تلفنی</h3>
                              <span
                                style={{ fontSize: "12px", color: "#707782" }}
                              >
                                تعداد مشاوره تلفنی در ماه رو انتخاب کن
                              </span>
                            </div>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          {/* 1 */}
                          <div className="d-flex justify-content-between align-items-center rounded border cur-pointer p-3 mt-2 box-selected ">
                            <div className="d-flex align-items-center">
                              <div
                                className="border"
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "50%",
                                }}
                              />
                              <div className="d-flex aligm-items-center flex-column me-2">
                                <strong>ماهانه یک جلسه</strong>
                                <span
                                  style={{ color: "#4b4f56", fontSize: "14px" }}
                                >
                                  در طرح کوتاه مدت سایر گزینه ها را انتخاب کنید
                                </span>
                              </div>
                            </div>
                            <span
                              style={{
                                color: "#707782",
                                fontSize: "12px",
                                fontWeight: "bold",
                              }}
                            >
                              114,000 تومان
                            </span>
                          </div>
                          {/* 2 */}
                          <div className="d-flex justify-content-between align-items-center rounded border cur-pointer p-3 mt-2 box-selected ">
                            <div className="d-flex align-items-center">
                              <div
                                className="border"
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "50%",
                                }}
                              />
                              <div className="d-flex aligm-items-center flex-column me-2">
                                <strong>ماهانه دو جلسه</strong>
                                <span
                                  style={{ color: "#4b4f56", fontSize: "14px" }}
                                >
                                  حداقل پیشنهادی براساس تجربه مشاوران
                                </span>
                              </div>
                            </div>
                            <div className="justify-content-between d-flex flex-column align-items-end">
                              <s
                                className="text-del"
                                style={{ fontSize: "10px" }}
                              >
                                228,000 تومان
                              </s>
                              <span
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "#707782",
                                }}
                              >
                                205,200 تومان
                              </span>
                            </div>
                          </div>
                          {/* 3 */}
                          <div className="d-flex justify-content-between align-items-center rounded border cur-pointer p-3 mt-2 box-selected ">
                            <div className="d-flex align-items-center">
                              <div
                                className="border"
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "50%",
                                }}
                              />
                              <div className="d-flex aligm-items-center flex-column me-2">
                                <strong>ماهانه سه جلسه</strong>
                                <span
                                  style={{ color: "#4b4f56", fontSize: "14px" }}
                                >
                                  تقریبا هر ۱۰ روز یک جلسه
                                </span>
                              </div>
                            </div>
                            <div className="justify-content-between d-flex flex-column align-items-end">
                              <s
                                className="text-del"
                                style={{ fontSize: "10px" }}
                              >
                                342,000 تومان
                              </s>
                              <span
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "#707782",
                                }}
                              >
                                290,700 تومان
                              </span>
                            </div>
                          </div>
                          {/* 4 */}
                          <div className="d-flex justify-content-between align-items-center rounded border cur-pointer p-3 mt-2 box-selected ">
                            <div className="d-flex align-items-center">
                              <div
                                className="border"
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "50%",
                                }}
                              />
                              <div className="d-flex aligm-items-center flex-column me-2">
                                <strong>ماهانه چهار جلسه</strong>
                                <span
                                  style={{ color: "#4b4f56", fontSize: "14px" }}
                                >
                                  تقریبا هر هفته یک جلسه
                                </span>
                              </div>
                            </div>
                            <div className="justify-content-between d-flex flex-column align-items-end">
                              <s
                                className="text-del"
                                style={{ fontSize: "10px" }}
                              >
                                456,000 تومان
                              </s>
                              <span
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "#707782",
                                }}
                              >
                                364,800 تومان
                              </span>
                            </div>
                          </div>
                          <div className="d-flex border-top mt-4 align-items-center  flex-row justify-content-end pt-4">
                            <button
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              style={{ backgroundColor: "#dedee4" }}
                              className="py-2 mx-1 border px-4 rounded"
                            >
                              بستن
                            </button>
                            <button
                              style={{
                                backgroundColor: "#550084",
                                color: "white",
                              }}
                              className=" py-2 mx-1 border px-4 rounded"
                            >
                              تایید
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* afjdfjsdfkj */}
            <div className="d-flex  flex-column mt-4">
              <span className="fs-6 text-secondary">مشاور شما</span>
              <div className=" d-flex flex-row justify-content-between p-3  mt-2 card border  ">
                <div className="d-flex flex-row align-items-center justify-content-between w-100">
                  <div className=" d-flex flex-column ">
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
                  <a
                    className="d-flex flex-row align-items-center justify-content-between"
                    href="#"
                    style={{
                      color: "#6e00aa",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    <div className="ms-1">
                      <PenIcon width={20} />
                    </div>
                    تغییر
                  </a>
                </div>
              </div>
            </div>
            {/* adokdoj */}
            <div className="d-flex  flex-column mt-4">
              <span className="fs-6 text-secondary">مشاور شما</span>
              <div className=" d-flex flex-row justify-content-between p-3  mt-2 card border  ">
                <div className="d-flex flex-row align-items-center w-100 justify-content-between">
                  <div className=" d-flex flex-column ">
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
                  <a
                    className="d-flex flex-row align-items-center justify-content-between"
                    href="#"
                    style={{
                      color: "#6e00aa",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    <div className="ms-1">
                      <PenIcon width={20} />
                    </div>
                    تغییر
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-rows card mt-2   ">
            <p className="pe-5 mt-3" style={{ fontSize: "14px" }}>
              ! قیمت هر ماه برنامه‌ریزی توسط مشاور225,000تومانوقیمت هر جلسه
              مشاوره تلفنی 114,000تومانمی باشد.
            </p>
          </div>
        </div>
        <div className="card col-lg-3 col-12 mt-2 mt-lg-0 d-flex me-2">
          <div className="d-flex flex-column  py-4">
            <h4 className="fs-6    pe-3">خلاصه سفارش</h4>
            <div className="d-flex justify-content-between flex-row px-3 mt-2  ">
              <span style={{ fontSize: "14px" }}>برنامه‌ریزی توسط مشاور</span>
              <span style={{ fontSize: "12px" }}>12 ماه</span>
            </div>
            <div className="d-flex  justify-content-between flex-row px-3  mt-2">
              <span style={{ fontSize: "14px" }}>مشاوره تلفنی</span>
              <span style={{ fontSize: "12px" }}>24 جلسه</span>
            </div>
            <div
              style={{ backgroundColor: "#e1f3f1" }}
              className="d-flex align-items-center justify-content-start mx-2 py-1 rounded mt-2  "
            >
              <div className="d-flex flex-row align-items-center me-2">
                <GiftIcon />
                <span className="me-1" style={{ fontSize: "13px" }}>
                  7 روز برنامه ريزي بيشتر هديه اولين خريد
                </span>
              </div>
            </div>
            <div className="border-top mt-3">
              <div className="d-flex flex-row justify-content-between align-items-center mt-3  px-3">
                <span style={{ fontSize: "13px" }}>قیمت</span>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  5,436,000تومان
                </span>
              </div>
              {/* dropdown */}
              {/* <div className="d-flex flex-row align-items-center cur-pointer">
                <span>تخفیف</span>
                <i className="icon-fas-fa-caret-down">/</i>
              </div> */}
              <div className="d-flex flex-row justify-content-between align-items-center mt-3 px-3">
                <span style={{ fontSize: "13px" }}>قیمت نهایی</span>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  3,303,936تومان
                </span>
              </div>
            </div>
            <button
              className="btn mt-4 w-75 px-2 py-3 d-flex justify-content-center align-self-center rounded border-none"
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
