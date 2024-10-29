import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonBackButton, IonButtons, IonButton, IonChip, IonBadge, IonText, IonFooter, IonInput, IonItem, IonIcon, IonGrid, IonRow, IonCol, IonLabel, IonNote, IonPopover } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonPopover,
    IonNote,
    IonLabel,
    IonCol,
    IonRow,
    IonGrid,
    IonIcon,
    IonItem,
    IonInput,
    IonFooter,
    IonText,
    IonBadge,
    IonChip,
    IonButton,
    IonButtons,
    IonBackButton,
    IonAvatar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ChatPage implements OnInit {
  contactName: string | null = '';
  contactAvatar: string | null = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const nameFromRoute = this.route.snapshot.paramMap.get('name');

    if (nameFromRoute) {
      const matchedContact = this.contacts.find(
        (contact) => contact.name === nameFromRoute
      );
      if (matchedContact) {
        this.contactName = matchedContact.name;
        this.contactAvatar = matchedContact.avatar;
      }
    }
  }

  contacts = [
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: true,
      yourMessage: true,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: true,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
      yourMessage: true,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: true,
      yourMessage: true,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: true,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: true,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
    {
      name: 'Sam',
      lastMessage: 'Hey, how are you?',
      avatar: '../../assets/u1.webp',
      lastSeen: '7:28 pm',
      unread: false,
    },
    {
      name: 'Vicky',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u2.webp',
      lastSeen: '6:41 pm',
      unread: false,
    },
    {
      name: 'Arun',
      lastMessage: 'Hey...',
      avatar: '../../assets/u3.jpeg',
      lastSeen: '5:34 pm',
      unread: false,
    },
    {
      name: 'Subash',
      lastMessage: `Let's catch up later!`,
      avatar: '../../assets/u4.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Surash',
      lastMessage: 'Hiii',
      avatar: '../../assets/u5.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Guna',
      lastMessage: 'You deleted this message',
      avatar: '../../assets/u6.jpeg',
      lastSeen: 'Yesterday',
      unread: false,
    },
    {
      name: 'Alex',
      lastMessage: 'Photo',
      avatar: '../../assets/u7.jpeg',
      lastSeen: '22/10/24',
      unread: false,
    },
    {
      name: 'Afdeen',
      lastMessage: 'Photo',
      avatar: '../../assets/u8.jpg',
      lastSeen: '21/10/24',
      unread: false,
    },
    {
      name: 'Sanger',
      lastMessage: 'Video',
      avatar: '../../assets/u9.jpg',
      lastSeen: '15/10/24',
      unread: false,
    },
    {
      name: 'Divya',
      lastMessage: '😀',
      avatar: '../../assets/u2.webp',
      lastSeen: '12/10/24',
      unread: false,
    },
  ];
}