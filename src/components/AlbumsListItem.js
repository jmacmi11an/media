import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
    const header = <div>{album.title}</div>
    return <ExpandablePanel header={header} key={album.id}>
        List of photos in the album
    </ExpandablePanel>
}

export default AlbumsListItem