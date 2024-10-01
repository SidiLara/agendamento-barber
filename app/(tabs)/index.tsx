import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import { Badge } from '@/components/Badge';
import { Button, buttonVariants, buttonTextVariants } from '@/components/Button';
import { Input } from '@/components/Input';
import { Alert, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <View className='flex-1 justify-center items-center'>
        <Avatar className='w-32 h-32 border-4 border-gray-600'>
          <AvatarImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/91575733?v=4',
            }}
          />
          <AvatarFallback>CG</AvatarFallback>
        </Avatar>
        <View className='items-center'>
          <Input label="Email" placeholder="Enter your email" />
        </View>
        <View className="flex flex-row gap-2">
          <Badge label="Badge" />
          <Badge label="Badge" variant="secondary" />
          <Badge label="Badge" variant="destructive" />
          <Badge label="Badge" className="bg-amber-400 dark:bg-amber-600" />
          <Badge label="Badge" variant="success" />
        </View>
        <View className='mt-5'>
          <View className="flex flex-row gap-3">
            <Button label="Button" onPress={() => Alert.alert('Pressed 1')} />
            <Button
              label="Button"
              variant="secondary"
              onPress={() => Alert.alert('Pressed 2')}
            />
            <Button
              label="Button"
              variant="destructive"
              onPress={() => Alert.alert('Pressed 3')}
            />
          </View>

        </View>

      </View>
    </>
  );
}
