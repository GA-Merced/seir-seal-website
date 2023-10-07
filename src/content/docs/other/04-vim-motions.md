---
title: Vim
description: A reference doc for Vim.
---

### What is Vim? 

Vim is a text editor for Unix that comes with Linux, BSD, and macOS. It is known to be fast and powerful, partly because it is a small program that can run in a terminal (although it has a graphical interface). It is mainly because it can be managed entirely without menus or a mouse with a keyboard.

### Why Vim?

In all POSIX systems, Vim is the default fallback editor. Vim is sure to be open, whether you have just installed the operating system, or you have booted into a minimal system repair environment, or you are unable to access any other editor. While you can switch out other tiny editors on your systems, such as GNU Nano or Jove, it's Vim that's all but guaranteed to be on every other system in the world.

## Global 

These are some of the common global Vim movements and commands used for file management and navigation. You can use these commands in normal mode by pressing `:` to enter command mode and then typing the desired command.

| Key Combination | Description                                      |
|------------------|--------------------------------------------------|
| `:q`               | Quit (close) the current file                    |
| `:q!`              | Quit (close) the current file without saving changes |
| `:w`               | Save the current file                            |
| `:wq`              | Save the current file and quit (close)          |
| `:x`               | Save changes and quit (close) the current file   |
| `:e [file]`        | Open a file for editing (optional: specify a file name) |
| `:sp [file]`       | Split window and open a file for editing (optional: specify a file name) |
| `:vsp [file]`      | Split window vertically and open a file for editing (optional: specify a file name) |
| `:b [buffer]`      | Switch to a different buffer (optional: specify a buffer number or name) |
| `:bn`              | Switch to the next buffer                        |
| `:bp`              | Switch to the previous buffer                    |
| `:bd [buffer]`     | Close (delete) a buffer (optional: specify a buffer number or name) |
| `:ls`              | List all open buffers and their statuses        |
| `:tabnew`          | Open a new tab                                    |
| `:tabnext` or `:tabn` | Switch to the next tab                          |
| `:tabprevious` or `:tabp` | Switch to the previous tab                    |
| `:tabclose` or `:tabc` | Close the current tab                         |
| `:tabonly` or `:tabo` | Close all other tabs and keep only the current tab |
| `:help [command]`  | Open Vim's help documentation (optional: specify a command for specific help) |

### Visual Commands
| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `v`         | Start visual mode character-wise selection.     |
| `V`         | Start visual mode line-wise selection.          |
| `Ctrl` + `v` | Start visual mode block-wise selection.        |
| `gv`        | Reselect the last visual selection.             |
| `:`         | Execute a command on the selected text.         |
| `!`         | Filter the selected text through an external command. |
| `x`         | Cut (delete) selected text.                     |
| `y`         | Copy (yank) selected text.                      |
| `>`         | Indent selected text.                           |
| `<`         | Unindent selected text.                         |

### Marking Text (Visual Mode)
| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `o`               | Move to the other end of the marked area.          |
| `O`               | Move to the other corner of the block.             |
| `aw`              | Mark a word.                                       |
| `ab`              | A block with `()` parentheses.                     |
| `aB`              | A block with `{}` curly braces.                    |
| `at`              | A block with `<>` angle brackets tags.             |
| `ib`              | Inner block with `()` parentheses.                 |
| `iB`              | Inner block with `{}` curly braces.                |
| `it`              | Inner block with `<>` angle brackets tags.         |
| `Esc` or `Ctrl + c` | Exit visual mode.                                 |


## Cursor 

To use these commands, you typically press the key combination in `Normal` mode. For example, to move the cursor down, you would press the `j` key, and to jump to the end of a word, you would press the `e` key.

You can also use a count before some commands to repeat them. For example, `3j` would move the cursor down three lines.

>Remember that Vim has different modes (Normal, Insert, Visual, etc.), and cursor movement commands are primarily used in Normal mode. If you're in a different mode (e.g., Insert), you may need to press Esc to return to Normal mode before using cursor movement commands.

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `h`         | Move cursor left.                                |
| `j`         | Move cursor down.                                |
| `k`         | Move cursor up.                                  |
| `l`         | Move cursor right.                               |
| `gj`        | Move cursor down (multi-line text).              |
| `gk`        | Move cursor up (multi-line text).                |
| `H`         | Move to top of screen.                           |
| `M`         | Move to middle of screen.                        |
| `L`         | Move to bottom of screen.                        |
| `w`         | Jump forwards to the start of a word.           |
| `W`         | Jump forwards to the start of a word (words can contain punctuation). |
| `e`         | Jump forwards to the end of a word.             |
| `E`         | Jump forwards to the end of a word (words can contain punctuation). |
| `b`         | Jump backwards to the start of a word.          |
| `B`         | Jump backwards to the start of a word (words can contain punctuation). |
| `ge`        | Jump backwards to the end of a word.            |
| `gE`        | Jump backwards to the end of a word (words can contain punctuation). |
| `%`         | Move cursor to matching character (default supported pairs: '()', '{}', '[]' - use `:h matchpairs` in Vim for more info). |
| `0`         | Jump to the start of the line.                  |
| `^`         | Jump to the first non-blank character of the line. |
| `$`         | Jump to the end of the line.                    |
| `g_`        | Jump to the last non-blank character of the line. |
| `gg`        | Go to the first line of the document.           |
| `G`         | Go to the last line of the document.            |
| `5gg` or `5G` | Go to line 5.                                |
| `gd`        | Move to local declaration.                      |
| `gD`        | Move to global declaration.                     |
| `fx`        | Jump to next occurrence of character x.         |
| `tx`        | Jump to before next occurrence of character x.  |
| `Fx`        | Jump to the previous occurrence of character x.  |
| `Tx`        | Jump to after previous occurrence of character x. |
| `;`         | Repeat previous f, t, F, or T movement.         |
| `,`         | Repeat previous f, t, F, or T movement, backwards. |
| `}`         | Jump to next paragraph (or function/block, when editing code). |
| `{`         | Jump to previous paragraph (or function/block, when editing code). |
| `zz`        | Center cursor on screen.                        |
| `zt`        | Position cursor on top of the screen.           |
| `zb`        | Position cursor on bottom of the screen.        |
| `Ctrl` + `e` | Move screen down one line (without moving cursor). |
| `Ctrl` + `y` | Move screen up one line (without moving cursor).   |
| `Ctrl` + `b` | Move screen up one page (cursor to last line).      |
| `Ctrl` + `f` | Move screen down one page (cursor to first line).   |
| `Ctrl` + `d` | Move cursor and screen down 1/2 page.               |
| `Ctrl` + `u` | Move cursor and screen up 1/2 page.                 |

## Basic Editing

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `i`         | Insert before cursor.                            |
| `I`         | Insert at the beginning of the line.            |
| `a`         | Insert after cursor.                             |
| `A`         | Insert at the end of the line.                  |
| `o`         | Open a new line below and insert.                |
| `O`         | Open a new line above and insert.                |
| `x`         | Delete character under cursor.                   |
| `dd`        | Delete current line.                             |
| `D`         | Delete from cursor to end of line.               |
| `u`         | Undo the last change.                            |
| `Ctrl` + `r` | Redo the last undone action.                    |

## Copy and Paste

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `yy`        | Copy (yank) current line.                       |
| `y`         | Copy (yank) selected text.                      |
| `p`         | Paste after cursor.                             |
| `P`         | Paste before cursor.                            |
| `dd`        | Cut (delete) current line.                      |
| `dw`        | Cut (delete) from cursor to the end of the word. |
| `D`         | Cut (delete) from cursor to the end of the line. |
| `x`         | Cut (delete) character under cursor.             |

## File Navigation

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `:e <file>` | Edit a specific file.                           |
| `:sp <file>` | Open a new horizontal split with the specified file. |
| `:vsp <file>` | Open a new vertical split with the specified file.   |
| `:tabe <file>` | Open a file in a new tab.                     |
| `:tabn`     | Go to the next tab.                              |
| `:tabp`     | Go to the previous tab.                          |
| `:tabfirst` | Go to the first tab.                            |
| `:tablast`  | Go to the last tab.                             |
| `:ls`       | List all open buffers.                          |
| `:bp`       | Go to the previous buffer.                      |
| `:bn`       | Go to the next buffer.                          |
| `:bd`       | Close the current buffer.                       |


## Search and Replace

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `:/pattern` | Search for `pattern` in the file.                |
| `:s/old/new/g` | Replace `old` with `new` globally on the current line. |
| `:s/old/new/gc` | Replace `old` with `new` globally on the current line with confirmation. |
| `:%s/old/new/g` | Replace `old` with `new` globally in the entire file. |
| `:%s/old/new/gc` | Replace `old` with `new` globally in the entire file with confirmation. |

## Search in Multiple Files

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `:grep pattern files` | Search for `pattern` in `files` and open matching lines in quickfix list. |
| `:lgrep pattern files` | Same as `:grep`, but open results in location list. |
| `:copen`    | Open quickfix list.                              |
| `:lopen`    | Open location list.                              |

## Indent Text

| Command     | Description                                      |
| ----------- | ------------------------------------------------ |
| `>>`        | Indent current line.                            |
| `<<`        | Unindent current line.                          |
| `>%`        | Indent a block with `()` or `{}` (cursor on brace)|
| `<%`        | De-indent a block with `()` or `{}` (cursor on brace)|
| `>ib`       | Indent inner block with `()`|
| `>at`       | Indent a block with `<>` tags|
| `>i{`       | Indent text within curly braces.                |
| `=i(`       | Indent text within parentheses.                 |
| `3==`       | Re-indent 3 lines.                 |
| `=%`       | Re-indent a block with `()` or `{}` (cursor on brace).                 |
| `]p`       | Paste and adjust indent to current line.                 |

## More

- [Vim Adventures](https://vim-adventures.com/), a fun game you can play to learn Vim.
- Looking to upgrade your vim experience, then try out [NeoVim](https://neovim.io/) the super customizable text editor.