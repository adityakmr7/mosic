import {View, StyleSheet, Text} from "react-native";
import Fm from '@/assets/images/FM.svg';
import Podcast from '@/assets/images/podcast-2.svg';
import RankingList from '@/assets/images/ranking-list.svg';
import Recommend from '@/assets/images/recommend.svg';
import SongSheet from '@/assets/images/song-sheet.svg';

const OPTIONS  = [
    {
        title:`Today's Hits`,
        icon:Recommend,
    },
    {
        title:'Stations',
        icon:Fm,
    },
    {
        title:'Podcast',
        icon:Podcast,
    },
    {
        title:'Playlists',
        icon:SongSheet,
    },
    {
        title:'Charts',
        icon:RankingList,
    },
]
const OptionSections  = () => {
    return (
        <View style={styles.container}>
            {OPTIONS.map((opt, index) => (
                <View style={styles.opt} key={index}>
                    <opt.icon/>
                    <Text style={styles.title}>{opt.title}</Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:16,
        paddingVertical:32,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    opt: {
      flexDirection:'column',
      alignItems:'center'
    },
    title: {
        fontSize:10,
        textAlign:'center',
        marginTop:8,
    }
})
export default OptionSections;
