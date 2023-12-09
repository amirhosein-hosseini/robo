import LeagueItem from "./LeagueItem";
import styles from "./styles.module.scss";

const LeaguePage = () => {
    return(
        <div className={styles.leaguepage}>
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
            <LeagueItem />
        </div>
    )
}

export default LeaguePage;