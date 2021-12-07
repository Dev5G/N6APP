import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native'

import {
	createDrawerNavigator,
	DrawerContentScrollView
} from '@react-navigation/drawer'

import {
	COLORS,
	SIZES,
	icons,
	FONTS,
	dummyData
} from "../../constants";

import { MainLayout } from "../screens";
import { DrawerActionHelpers } from "@react-navigation/routers";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

const Drawer = createDrawerNavigator()



const CustomDrawer = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.primary
			}}
		>
			<Drawer.Navigator
				drawerContent={(props) => <CustomDrawerContent {...props} />}
				screenOptions={{
					headerShown: false,
					drawerType: "slide",
					overlayColor: "transparent",
					drawerStyle: {
						flex: 1,
						width: '65%',
						paddingRight: 20,
						backgroundColor: 'transparent'
					},
					sceneContainerStyle: {
						backgroundColor: 'transparent'
					}
				}}
				initialRouteName='Home'
			>
				<Drawer.Screen
					name="Home"
					component={MainLayout}
					options={{ drawerLabel: 'Home' }}
				/>
			</Drawer.Navigator>

		</View>
	)
}

const CustomDrawerContent = ({ navigation }: { navigation: DrawerNavigationHelpers }): JSX.Element => {
	return (
		<DrawerContentScrollView
			contentContainerStyle={{
				flex: 1,
				paddingHorizontal: SIZES.radius,
			}}
		>
			{/* {Close Button} */}
			<View
				style={{
					alignItems: 'flex-start',
					justifyContent: 'center'
				}}
			>
				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onPress={() => navigation.closeDrawer()}
				>
					<Image source={icons.cross}
						style={{
							tintColor: COLORS.white,
							height: 35,
							width: 35,
						}}
					/>
				</TouchableOpacity>
			</View>
			{/* Profile */}
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					marginTop: SIZES.radius,
					alignItems: 'center'
				}}
				onPress={() => {
					console.log('Profile')
				}}
			>

				<Image
					source={dummyData.myProfile?.profile_image}
					style={{
						width: 50,
						height: 50,
						borderRadius: SIZES.radius,

					}} />
				<View
					style={{ marginLeft: SIZES.radius }}
				>
					<Text style={{
						color: COLORS.white,
						...FONTS.h3
					}}>{dummyData.myProfile?.name}</Text>
					<Text
						style={{
							color: COLORS.white,
							...FONTS.body4
						}}>View Profile</Text>
				</View>
			</TouchableOpacity>
			{/* Menu */}
			<View
				style={{
					flex: 1,
					marginTop: SIZES.padding
				}}>
				<CustomDrawerItem
					label="Home"
					icon={icons.home} />
				{/* LineDivider */}
				<View style={{
					height: 1,
					backgroundColor: COLORS.lightGray1,
					marginVertical: SIZES.radius,
					marginLeft: SIZES.radius,
				}} />
			</View>
			<View
				style={{ marginBottom: SIZES.padding }}
			>
				<CustomDrawerItem
					label="Logout"
					icon={icons.logout} />
			</View>

		</DrawerContentScrollView>
	)
}
const CustomDrawerItem = ({ label, icon }: { label: string, icon: any }): JSX.Element => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				height: 40,
				marginBottom: SIZES.base,
				alignItems: 'center',
				paddingLeft: SIZES.radius,
				borderRadius: SIZES.base
			}}>
			<Image source={icon}
				style={{
					width: 20,
					height: 20,
					tintColor: COLORS.white
				}} />
			<Text
				style={{
					marginLeft: 15,
					color: COLORS.white,
					...FONTS.h3
				}}>
				{label}
			</Text>
		</TouchableOpacity>
	)
}
export default CustomDrawer