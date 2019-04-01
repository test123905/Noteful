import React, { Component } from 'react'
import Note from '../Note/Note'
import NoteContext from '../NoteContext'
import { findNote } from '../notes-helpers'

export default class NotePageMain extends Component {
  static defaultProps = {
    match: {
        params: {}
    }
  }
  static contextType = NoteContext;
  render(){
    const { notes } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || { content: '' }
    console.log('noet ', note)
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}
