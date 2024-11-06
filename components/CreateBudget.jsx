'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from 'emoji-picker-react';
import { Button } from './ui/button';

const CreateBudget = () => {

  const [emojiIcon, setEmojiIcon] = useState('💲')
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  return (
    <div>
      <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
        <h2 className="text-3xl">+</h2>
        <h2>Create New Budget</h2>
      </div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <Button variant="outline">
                {emojiIcon}
              </Button>
              {/* <EmojiPicker /> */}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget