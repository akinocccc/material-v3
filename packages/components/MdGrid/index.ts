import Grid from "./MdGrid.vue";
import GridItem from "./MdGridItem.vue";
import { withInstall, withNoopInstall } from "@material/utils/install";

export const MdGridItem = withNoopInstall(GridItem);
export const MdGrid = withInstall(Grid, { GridItem });
export default MdGrid;
