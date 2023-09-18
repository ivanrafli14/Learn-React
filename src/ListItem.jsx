import { showFormattedDate } from "./Data.js";

export default function ListItem({
  id,
  title,
  body,
  archive,
  date,
  onDelete,
  onArchive,
}) {
  date = showFormattedDate(date);
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <h5 className="card-header">{title}</h5>
          <div className="card-body">
            <small className="text-muted">{date}</small>
            <p className="card-text mt-3 mb-3">{body}</p>
          </div>

          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <button className="btn btn-danger" onClick={() => onDelete(id)}>
                Delete
              </button>

              <button className="btn btn-warning" onClick={() => onArchive(id)}>
                {!archive ? "Arsip" : "Keluarkan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
