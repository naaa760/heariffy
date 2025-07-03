## Heariffy 


![image](https://github.com/user-attachments/assets/16ba4eb7-1e54-4e9e-b117-588735c57646)

![image](https://github.com/user-attachments/assets/90bc8e82-54d4-49de-aab7-a065c3864c00)

![image](https://github.com/user-attachments/assets/274b83db-5382-45b3-99f6-c6d34a389150)

![image](https://github.com/user-attachments/assets/41c29fe2-7d47-4c92-8f3c-7ab71e44dfc3)



Project Link: https://heariffy-byu8.vercel.app/


# Audio Classification CNN with PyTorch & Next.js Dashboard

A comprehensive end-to-end project for training and deploying deep learning models for audio classification. Learn to build a CNN from scratch with PyTorch that can classify sounds like dog barking or birds chirping, then deploy it with a beautiful interactive dashboard.

## 🎯 Project Overview

This project provides a complete tutorial and implementation for:
- **Training** a deep audio classification CNN using PyTorch
- **Deploying** the model with serverless GPU inference
- **Building** an interactive Next.js dashboard for visualization and testing
- **Understanding** advanced ML concepts through hands-on implementation


## ✨ Features

### 🧠 Deep Learning & Training
- **Deep Audio CNN**: Custom convolutional neural network for sound classification
- **ResNet Architecture**: Residual blocks for robust feature learning
- **Mel Spectrogram Processing**: Convert audio to visual representations
- **Advanced Data Augmentation**: Mixup & Time/Frequency Masking techniques
- **Optimized Training**: AdamW optimizer with OneCycleLR scheduler
- **Batch Normalization**: For stable and fast training convergence
- **TensorBoard Integration**: Real-time training analysis and monitoring

### ⚡ Deployment & Infrastructure
- **Serverless GPU Inference**: Deploy with Modal for scalable predictions
- **FastAPI Endpoint**: Robust API for model inference
- **Pydantic Validation**: Type-safe data validation for API requests
- **100% Free Services**: No cost barriers for learning and experimentation

### 📊 Interactive Dashboard
- **Next.js & React Frontend**: Modern, responsive web interface
- **Audio Upload Interface**: Drag-and-drop audio file processing
- **Real-time Classification**: Instant predictions with confidence scores
- **Feature Map Visualization**: See what the CNN "sees" in internal layers
- **Waveform Display**: Visual representation of audio signals
- **Spectrogram Visualization**: Time-frequency analysis of audio
- **Modern UI**: Built with Tailwind CSS & Shadcn UI components



## 🎓 Learning Path

### Phase 1: Understanding Audio ML
1. **Audio Preprocessing**: Learn about Mel Spectrograms and audio-to-image conversion
2. **CNN Architecture**: Understand convolutional layers and feature extraction
3. **ResNet Concepts**: Implement residual connections for deep networks

### Phase 2: Training Pipeline
1. **Data Augmentation**: Implement Mixup and masking techniques
2. **Training Loop**: Set up PyTorch training with proper validation
3. **Optimization**: Use advanced schedulers and techniques for best results

### Phase 3: Deployment
1. **Model Serving**: Deploy with Modal for serverless inference
2. **API Development**: Build FastAPI endpoints with proper validation
3. **Performance Optimization**: Ensure fast, reliable predictions

### Phase 4: Dashboard Development
1. **Frontend Setup**: Create responsive React interface
2. **Audio Processing**: Handle file uploads and audio display
3. **Visualization**: Build feature map and spectrogram components
4. **Real-time Inference**: Connect frontend to ML API



### Backend
- **Modal**: Serverless GPU compute
- **FastAPI**: High-performance API framework

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first styling
- **Shadcn UI**: Modern component library
- **Clerk**: Authentication and user management

## 🌐 Deployment Options

- **Modal**: Recommended for serverless GPU inference
- **Vercel**: Frontend deployment with automatic CI/CD


## 📊 Model Performance

The trained CNN achieves:
- **Training Accuracy**: >95% on common audio classes
- **Inference Speed**: <100ms per audio file
- **Model Size**: <50MB for efficient deployment
- **Supported Formats**: WAV, MP3, FLAC audio files



**Deployment Issues:**
- Modal timeouts: Optimize model loading and inference code
- API errors: Check Pydantic validation and input formats

**Dashboard Issues:**
- Audio upload fails: Verify supported file formats and size limits
- Visualization problems: Check browser audio/canvas permissions
