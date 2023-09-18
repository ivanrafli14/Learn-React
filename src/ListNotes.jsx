import ListItem from "./ListItem";

export default function ListNotes({ data, archiveHandler, deleteHandler }) {
  // const archived_notes  = data.filter((el) => el.archived === true);
  // const active_notes  = data.filter((el) => el.archived === false);
  if (data.length == 0) {
    return (
      <>
        <div className="container mx-auto">
          <div className="row">
            <p className="text-center">Tidak ada data</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="row">
          {data.map(
            (el) => (
              <ListItem
                key={el.id}
                id={el.id}
                title={el.title}
                body={el.body}
                archive={el.archived}
                date={el.createdAt}
                onDelete={deleteHandler}
                onArchive={archiveHandler}
              />
            )
            //console.log(el.title)
          )}
        </div>
      </div>
    </>
  );
}
