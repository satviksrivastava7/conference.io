'use client';
import { ReactNode } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Image from 'next/image';

interface CreateMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  handleClick2?: () => void;
  buttonText?: string;
  buttonText2?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
  buttonIcon2?: string;
}

const CreateMeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  handleClick2,
  buttonText,
  buttonText2,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
  buttonIcon2,
}: CreateMeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 rounded-none border border-gradient-start bg-dark-6 px-6 py-9 text-white">
        <div className="flex flex-col gap-6 rounded-none">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
            {title}
          </h1>
          {children}
          <Button
            className={
              'bg-gradient-start focus-visible:ring-0 focus-visible:ring-offset-0 text-black hover:text-white'
            }
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{' '}
            &nbsp;
            {buttonText || 'Schedule Meeting'}
          </Button>
          <Button
            className={
              'bg-gradient-start focus-visible:ring-0 focus-visible:ring-offset-0 text-black hover:text-white'
            }
            onClick={handleClick2}
          >
            {buttonIcon2 && (
              <Image
                src={buttonIcon2}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{' '}
            &nbsp;
            {buttonText2 || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMeetingModal;
