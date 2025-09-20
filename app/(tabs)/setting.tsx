import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

export default function Setting() {
  return (
    <View className="flex-1 mt-16 px-6 bg-black">
      <Text className="text-3xl font-bold text-white mb-10">Settings</Text>

      <VStack>
        <Pressable className="flex flex-row items-center justify-between py-4 px-6 bg-neutral-800 rounded-2xl mb-4 shadow-md active:opacity-80">
          <View className="flex flex-row items-center gap-4">
            <Ionicons size={22} name="person" color="#fff" />
            <Text className="text-lg font-medium text-white">Profile</Text>
          </View>
          <Ionicons size={20} name="chevron-forward" color="#bbb" />
        </Pressable>
        <Pressable className="flex flex-row items-center justify-between py-4 px-6 bg-neutral-800 rounded-2xl mb-4 shadow-md active:opacity-80">
          <View className="flex flex-row items-center gap-4">
            <Ionicons size={22} name="sunny" color="#fff" />
            <Text className="text-lg font-medium text-white">Theme</Text>
          </View>
          <Ionicons size={20} name="chevron-forward" color="#bbb" />
        </Pressable>
        <Pressable className="flex flex-row items-center justify-between py-4 px-6 bg-neutral-800 rounded-2xl mb-4 shadow-md active:opacity-80">
          <View className="flex flex-row items-center gap-4">
            <Ionicons size={22} name="language" color="#fff" />
            <Text className="text-lg font-medium text-white">Language</Text>
          </View>
          <Ionicons size={20} name="chevron-forward" color="#bbb" />
        </Pressable>
        <Pressable className="flex flex-row items-center justify-between py-4 px-6 bg-neutral-800 rounded-2xl mb-4 shadow-md active:opacity-80">
          <View className="flex flex-row items-center gap-4">
            <Ionicons size={22} name="navigate" color="#fff" />
            <Text className="text-lg font-medium text-white">Routes</Text>
          </View>
          <Ionicons size={20} name="chevron-forward" color="#bbb" />
        </Pressable>
      </VStack>

      <Box className="absolute bottom-8 left-0 right-0">
        <Text className="text-base text-neutral-400 text-center">
          App made with love 💖 in Kolkata
        </Text>
      </Box>
    </View>
  );
}
