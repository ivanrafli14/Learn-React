import { useState } from "react";

export default function FormInput({ addHandler }) {
  const [len, setLen] = useState(0);
  const [word, setWord] = useState("");

  const Handler = (e) => {
    if (e.target.value.length > 50) {
      alert("Jumlah Kata tidak boleh lebih dari 50");
      return;
    }
    setWord(e.target.value);
    setLen(e.target.value.length);

    //console.log(word, len);
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    //alert('fsfsfsf')

    const obj = {
      id: today.toDateString(),
      title: e.target.title.value,
      body: e.target.desc.value,
      archived: false,
      createdAt: today.toISOString(),
    };
    //console.log(obj);
    setWord("");
    setLen(0);
    e.target.desc.value = "";

    addHandler(obj);
  };

  return (
    <>
      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6 ">
          <form className="form-example" onSubmit={FormSubmit}>
            <h1>Tambah Catatan</h1>

            <div className="form-group mb-3">
              <label className="form-label">Judul</label>
              <input
                type="text"
                className="form-control"
                value={word}
                name="title"
                onChange={Handler}
                required
              />
              <div className="form-text">
                <p className="text-end">Sisa Kata: {50 - len}</p>
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Deskripsi</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="desc"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mb-4 text-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
