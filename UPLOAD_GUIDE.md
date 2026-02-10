# Image Upload Guide

This guide explains how to use multer for uploading images in the SANAD backend.

## Setup

Multer is already configured and ready to use. The upload functionality includes:

- ✅ File validation (only images allowed)
- ✅ File size limit (5MB max)
- ✅ Automatic unique filename generation
- ✅ Old image deletion when updating
- ✅ Authentication required for all uploads

## API Endpoints

### 1. Upload User Profile Image
```
POST /api/upload/user/:userId
Content-Type: multipart/form-data
Body: form-data with field name "image"
```

**Example (using axios):**
```typescript
const formData = new FormData();
formData.append('image', {
  uri: imageUri, // From image picker
  type: 'image/jpeg',
  name: 'profile.jpg',
});

const response = await axios.post(
  `${API_URL}/upload/user/${userId}`,
  formData,
  {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  }
);
```

### 2. Upload Child Image
```
POST /api/upload/child/:childId
Content-Type: multipart/form-data
Body: form-data with field name "image"
```

**Example:**
```typescript
const formData = new FormData();
formData.append('image', {
  uri: imageUri,
  type: 'image/jpeg',
  name: 'child-photo.jpg',
});

const response = await axios.post(
  `${API_URL}/upload/child/${childId}`,
  formData,
  {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  }
);
```

### 3. Upload Center Image
```
POST /api/upload/center/:centerId
Content-Type: multipart/form-data
Body: form-data with field name "image"
Authorization: Admin only
```

### 4. Upload Professional Image
```
POST /api/upload/professional/:professionalId
Content-Type: multipart/form-data
Body: form-data with field name "image"
Authorization: Admin or Professional themselves
```

## Response Format

All upload endpoints return:

```json
{
  "success": true,
  "data": {
    "imageUrl": "/uploads/filename-1234567890-123456789.jpg",
    "message": "Image uploaded successfully"
  }
}
```

## Accessing Uploaded Images

Uploaded images are served statically at:
```
http://localhost:8000/uploads/filename.jpg
```

The `imageUrl` in the response can be used directly in your frontend:
```typescript
<Image source={{ uri: `${API_URL}${imageUrl}` }} />
```

## File Storage

- **Location**: `backEnd/sanad-be/uploads/`
- **Naming**: `originalname-timestamp-random.ext`
- **Max Size**: 5MB
- **Allowed Types**: All image types (image/jpeg, image/png, image/gif, etc.)

## Error Handling

The upload endpoints handle:
- ✅ Authentication validation
- ✅ Authorization checks (users can only update their own images)
- ✅ File validation (image types only)
- ✅ File size validation
- ✅ Automatic cleanup of old images
- ✅ Error cleanup (deletes uploaded file if operation fails)

## Frontend Example (React Native)

```typescript
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import FormData from 'form-data';

const uploadUserImage = async (userId: string, token: string) => {
  // Request permission
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission denied!');
    return;
  }

  // Pick image
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.8,
  });

  if (!result.canceled && result.assets[0]) {
    const imageUri = result.assets[0].uri;
    
    // Create form data
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'profile.jpg',
    } as any);

    try {
      const response = await axios.post(
        `${API_URL}/upload/user/${userId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log('Image uploaded:', response.data.data.imageUrl);
      return response.data.data.imageUrl;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }
};
```

## Notes

- All upload routes require authentication
- Users can only upload their own profile images
- Parents can only upload images for their own children
- Center images require admin role
- Professional images can be uploaded by admins or the professional themselves
- Old images are automatically deleted when a new image is uploaded
