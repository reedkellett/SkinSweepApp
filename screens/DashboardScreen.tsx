import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps, Status } from "../types";
import FolderPreview from "../components/FolderPreview";
import Colors from "../constants/Colors";

const dataSource = [
  { id: "1", title: 'left elbow mole', imgUrl: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg', status: Status.UPDATED  },
  { id: "2", title: 'right hand rash', imgUrl: 'https://images.everydayhealth.com/images/common-types-of-rashes-01-rm-1440x810.jpg', status: Status.NEEDS_UPDATING  },
  { id: "3", title: 'ear fungus', imgUrl: '', status: Status.TREATED  },
  { id: "4", title: 'thigh mole', imgUrl: '', status: Status.UPDATE_IMMEDIATELY  },
  { id: "5", title: 'backne' , imgUrl: '', status: Status.NEEDS_UPDATING  },
];

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Photo Log</Text>
      <FlatList
        style={styles.list}
        data={dataSource}
        renderItem={({ item }) => 
          <FolderPreview id={ item.id } title={item.title} imgUrl={item.imgUrl} status={item.status} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lightPurple,
  },
  list: {
    width: '100%',
    height: '100%',
  }, 
  header: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: "bold",
  },
});
