import { useEffect } from 'react';

import {
  Box,
  ButtonProps,
  Button as ChakraButton,
  IconButton as ChakraIconButton,
  IconButtonProps,
  Stack,
} from '@chakra-ui/react';
import Code from '@tiptap/extension-code';
import Document from '@tiptap/extension-document';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Typography from '@tiptap/extension-typography';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineEnter,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { FaBold, FaItalic, FaStrikethrough } from 'react-icons/fa';
import { GoHorizontalRule } from 'react-icons/go';
import { VscDebugStepBack, VscDebugStepOver } from 'react-icons/vsc';

import { SmilieReplacer } from './SmilieReplacer';
import { ModalAddImage } from './_partials/ModalAddImage';
import { Icon } from '../Icon';

const Button = (props: ButtonProps) => {
  return <ChakraButton mx="0.5" my="1 !important" {...props} />;
};

export const IconButton = (props: Omit<IconButtonProps, 'aria-label'>) => {
  return (
    <ChakraIconButton
      mx="0.5"
      my="1 !important"
      aria-label="editer function"
      {...props}
    />
  );
};

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Stack direction="row" wrap="wrap" spacing={1} my="2">
      <IconButton
        icon={<Icon icon={AiOutlineAlignLeft} />}
        onClick={() => editor.chain()?.focus()?.setTextAlign('left')?.run()}
      />
      <IconButton
        icon={<Icon icon={AiOutlineAlignCenter} />}
        onClick={() => editor.chain()?.focus()?.setTextAlign('center')?.run()}
      />
      <IconButton
        icon={<Icon icon={AiOutlineAlignRight} />}
        onClick={() => editor.chain()?.focus()?.setTextAlign('right')?.run()}
      />
      <IconButton
        icon={<Icon icon={FaBold} />}
        onClick={() => editor.chain()?.focus()?.toggleBold()?.run()}
        isActive={editor.isActive('bold')}
      />
      <IconButton
        icon={<Icon icon={FaItalic} />}
        onClick={() => editor.chain()?.focus()?.toggleItalic()?.run()}
        isActive={editor.isActive('italic')}
      />
      <IconButton
        icon={<Icon icon={FaStrikethrough} />}
        onClick={() => editor.chain()?.focus()?.toggleStrike()?.run()}
        isActive={editor.isActive('strike')}
      />
      <ModalAddImage editor={editor} />
      <IconButton
        icon={<Icon icon={AiOutlineUnorderedList} />}
        onClick={() => editor.chain()?.focus()?.toggleBulletList()?.run()}
        isActive={editor.isActive('bulletList')}
      />
      <IconButton
        icon={<Icon icon={AiOutlineOrderedList} />}
        onClick={() => editor.chain()?.focus()?.toggleOrderedList()?.run()}
        isActive={editor.isActive('orderedList')}
      />
      <Button
        onClick={() => editor.chain()?.focus()?.toggleCode()?.run()}
        isActive={editor.isActive('code')}
      >
        code
      </Button>
      <Button onClick={() => editor.chain()?.focus()?.unsetAllMarks()?.run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain()?.focus()?.clearNodes()?.run()}>
        clear nodes
      </Button>
      <Button
        onClick={() => editor.chain()?.focus()?.setParagraph()?.run()}
        isActive={editor.isActive('paragraph')}
      >
        paragraph
      </Button>

      <Button
        onClick={() =>
          editor.chain()?.focus()?.toggleHeading({ level: 1 }).run()
        }
        isActive={editor.isActive('heading', { level: 1 })}
      >
        h1
      </Button>
      <Button
        onClick={() =>
          editor.chain()?.focus()?.toggleHeading({ level: 2 }).run()
        }
        isActive={editor.isActive('heading', { level: 2 })}
      >
        h2
      </Button>
      <Button
        onClick={() =>
          editor.chain()?.focus()?.toggleHeading({ level: 3 }).run()
        }
        isActive={editor.isActive('heading', { level: 3 })}
      >
        h3
      </Button>
      <Button
        onClick={() =>
          editor.chain()?.focus()?.toggleHeading({ level: 4 }).run()
        }
        isActive={editor.isActive('heading', { level: 4 })}
      >
        h4
      </Button>
      <Button
        onClick={() =>
          editor.chain()?.focus()?.toggleHeading({ level: 5 }).run()
        }
        isActive={editor.isActive('heading', { level: 5 })}
      >
        h5
      </Button>
      <Button
        onClick={() =>
          editor.chain()?.focus()?.toggleHeading({ level: 6 }).run()
        }
        isActive={editor.isActive('heading', { level: 6 })}
      >
        h6
      </Button>

      <Button
        onClick={() => editor.chain()?.focus()?.toggleCodeBlock()?.run()}
        isActive={editor.isActive('codeBlock')}
      >
        code block
      </Button>
      <Button
        onClick={() => editor.chain()?.focus()?.toggleBlockquote()?.run()}
        isActive={editor.isActive('blockquote')}
      >
        blockquote
      </Button>
      <IconButton
        icon={<Icon icon={GoHorizontalRule} />}
        onClick={() => editor.chain()?.focus()?.setHorizontalRule()?.run()}
      />
      <IconButton
        icon={<Icon icon={AiOutlineEnter} />}
        onClick={() => editor.chain()?.focus()?.setHardBreak()?.run()}
      />

      <IconButton
        icon={<Icon icon={VscDebugStepBack} />}
        onClick={() => editor.chain()?.focus()?.undo()?.run()}
      />
      <IconButton
        icon={<Icon icon={VscDebugStepOver} />}
        onClick={() => editor.chain()?.focus()?.redo()?.run()}
      />
    </Stack>
  );
};

interface WysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
}
export const Wysiwyg = ({ onChange, value, ...rest }: WysiwygProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph,
      Text,
      Document,
      Code,
      Typography,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      SmilieReplacer,
      Image.configure({
        inline: true,
      }),
      SmilieReplacer,
    ],
    content: value || '<Text fontSize="3xl">Hello World! 🌎️</Text>',
    editorProps: {
      attributes: {
        spellcheck: 'false',
      },
    },
  });
  const output = editor?.getHTML();
  useEffect(() => {
    onChange?.(output);
  }, [output, onChange]);

  return (
    <Box
      className="wysiwyg-editor"
      bg="white"
      p="2"
      borderRadius="md"
      {...rest}
    >
      <MenuBar editor={editor} />
      <Box px="6">
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};
